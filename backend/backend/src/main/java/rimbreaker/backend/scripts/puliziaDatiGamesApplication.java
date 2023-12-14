package rimbreaker.backend.scripts;

/* import org.springframework.boot.SpringApplication; */
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class puliziaDatiGamesApplication {

    public static void main(String[] args) {
        Map<String, String> dbConfig = new HashMap<>();
        dbConfig.put("host", "localhost");
        dbConfig.put("port", "3306");
        dbConfig.put("user", "root");
        dbConfig.put("password", null);
        dbConfig.put("database", "rimbreakers");

        Connection conn = connectToDatabase(dbConfig);

        int[] leaguesToFollow = { 197, 120, 194, 202, 2, 40, 45, 52, 242, 143, 142, 117, 104 };
        int maxApi = 35;

        try (BufferedReader checkpointReader = new BufferedReader(
                new FileReader("backend/backend/src/main/java/rimbreaker/backend/scripts/checkpoint_pulizia.txt"))) {
            String[] ck = checkpointReader.readLine().strip().split(" , ");
            String anno = ck[0];
            int m = Integer.parseInt(ck[1]);
            int d = Integer.parseInt(ck[2]);

            int giorno = d;
            int mese = m;

            while (mese <= 12) {
                while (giorno <= getDaysInMonth(mese)) {
                    String meseTxt = String.format("%02d", mese);
                    String giornoTxt = String.format("%02d", giorno);

                    String nomeFile = "data/games" + anno + "_" + meseTxt + "_" + giornoTxt + ".json";

                    try (BufferedReader fileReader = new BufferedReader(new FileReader(nomeFile))) {
                        StringBuilder data = new StringBuilder();
                        String line;
                        while ((line = fileReader.readLine()) != null) {
                            data.append(line);
                        }

                        parseJsonAndInsertIntoDatabase(data.toString(), conn, leaguesToFollow);
                        System.out.println("Letto il file del " + anno + " " + meseTxt + " " + giornoTxt);

                    } catch (IOException e) {
                        System.out.println("File non trovato" + e);
                        System.exit(1);
                    }

                    giorno++;
                    maxApi--;

                    if (maxApi == 0) {
                        String nomeFileCheckpoint = "checkpoint_pulizia.txt";
                        String stringaData = anno + " , " + meseTxt + " , " + giornoTxt;
                        scriviSuFile(nomeFileCheckpoint, stringaData);
                    }
                }

                mese++;
                giorno = 1;
            }

            if (mese > 12) {
                giorno = 1;
                mese = 1;
                anno = String.valueOf(Integer.parseInt(anno) + 1);
            }
        } catch (IOException | SQLException | ParseException e) {
            e.printStackTrace();
        }
    }

    private static Connection connectToDatabase(Map<String, String> dbConfig) {
        Connection conn = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://" + dbConfig.get("host") + ":" + dbConfig.get("port") + "/"
                    + dbConfig.get("database");
            conn = DriverManager.getConnection(url, dbConfig.get("user"), dbConfig.get("password"));
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }

        return conn;
    }

    private static void parseJsonAndInsertIntoDatabase(String jsonData, Connection conn, int[] leaguesToFollow)
            throws SQLException, ParseException {
        // Parse JSON manually
        String[] tokens = jsonData.split(",");
        String idPrincipale = getValue(tokens, "id");
        String dateString = getValue(tokens, "date");
        String status = getValue(tokens, "status");
        String leagueId = getValue(tokens, "league_id");
        String leagueName = getValue(tokens, "league_name");
        String leagueType = getValue(tokens, "league_type");
        String leagueSeason = getValue(tokens, "league_season");
        String leagueLogo = getValue(tokens, "league_logo");
        String countryId = getValue(tokens, "country_id");
        String countryName = getValue(tokens, "country_name");
        String countryCode = getValue(tokens, "country_code");
        String countryFlag = getValue(tokens, "country_flag");
        String teamsHomeId = getValue(tokens, "teams_home_id");
        String teamsHomeName = getValue(tokens, "teams_home_name");
        String teamsHomeLogo = getValue(tokens, "teams_home_logo");
        String teamsAwayId = getValue(tokens, "teams_away_id");
        String teamsAwayName = getValue(tokens, "teams_away_name");
        String teamsAwayLogo = getValue(tokens, "teams_away_logo");
        String scoresHomeQ1 = getValue(tokens, "scores_home_q1");
        String scoresHomeQ2 = getValue(tokens, "scores_home_q2");
        String scoresHomeQ3 = getValue(tokens, "scores_home_q3");
        String scoresHomeQ4 = getValue(tokens, "scores_home_q4");
        String scoresHomeOT = getValue(tokens, "scores_home_ot");
        String scoresHomeTotal = getValue(tokens, "scores_home_total");
        String scoresAwayQ1 = getValue(tokens, "scores_away_q1");
        String scoresAwayQ2 = getValue(tokens, "scores_away_q2");
        String scoresAwayQ3 = getValue(tokens, "scores_away_q3");
        String scoresAwayQ4 = getValue(tokens, "scores_away_q4");
        String scoresAwayOT = getValue(tokens, "scores_away_ot");
        String scoresAwayTotal = getValue(tokens, "scores_away_total");

        // Check if leagueId is in leaguesToFollow
        if (contains(leaguesToFollow, Integer.parseInt(leagueId))) {
            // Insert data into the database
            String dateStr = formatDate(dateString);
            String query = "INSERT INTO games (id_games, date, status, id_home, score_home, id_away, score_away) " +
                    "VALUES (?, STR_TO_DATE(?, '%Y-%m-%d %H:%i:%s'), ?, ?, ?, ?, ?)";
            insertIntoSql(query, conn, idPrincipale, dateStr, status, teamsHomeId,
                    getScoreString(scoresHomeQ1, scoresHomeQ2, scoresHomeQ3, scoresHomeQ4, scoresHomeOT,
                            scoresHomeTotal),
                    teamsAwayId, getScoreString(scoresAwayQ1, scoresAwayQ2, scoresAwayQ3, scoresAwayQ4, scoresAwayOT,
                            scoresAwayTotal));

            query = "INSERT INTO league (id_league, name, type, season, logo) VALUES (?, ?, ?, ?, ?)";
            insertIntoSql(query, conn, leagueId, leagueName, leagueType, leagueSeason, leagueLogo);

            query = "INSERT INTO team (id_team, id_league, name, logo) VALUES (?, ?, ?, ?)";
            insertIntoSql(query, conn, teamsHomeId, leagueId, teamsHomeName, teamsHomeLogo);
            insertIntoSql(query, conn, teamsAwayId, leagueId, teamsAwayName, teamsAwayLogo);

            query = "INSERT INTO season (season) VALUES (?)";
            insertIntoSql(query, conn, leagueSeason);

            query = "INSERT INTO country (id_country, id_league, name, code, flag) VALUES (?, ?, ?, ?, ?)";
            insertIntoSql(query, conn, countryId, leagueId, countryName, countryCode, countryFlag);
        }
    }

    private static String getValue(String[] tokens, String key) {
        for (String token : tokens) {
            String[] keyValue = token.split(":");
            if (keyValue.length == 2 && keyValue[0].trim().equals("\"" + key + "\"")) {
                return keyValue[1].trim();
            }
        }
        return "";
    }

    private static String getScoreString(String q1, String q2, String q3, String q4, String ot, String total) {
        return q1 + "," + q2 + "," + q3 + "," + q4 + "," + ot + "," + total;
    }

    private static String formatDate(String dateString) throws ParseException {
        SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssZ");
        Date date = inputFormat.parse(dateString);
        SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return outputFormat.format(date);
    }

    private static void scriviSuFile(String nome, String stringa) {
        try (FileWriter file = new FileWriter(nome)) {
            file.write(stringa);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void insertIntoSql(String query, Connection conn, Object... params) {
        try (PreparedStatement statement = conn.prepareStatement(query)) {
            for (int i = 0; i < params.length; i++) {
                if (params[i] instanceof Integer) {
                    statement.setInt(i + 1, (Integer) params[i]);
                } else if (params[i] instanceof String) {
                    statement.setString(i + 1, (String) params[i]);
                }
            }
            statement.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error inserting data: " + e + ", \n " + query);
        }
    }

    private static boolean contains(int[] array, int key) {
        for (int i : array) {
            if (i == key) {
                return true;
            }
        }
        return false;
    }

    private static int getDaysInMonth(int month) {
        int[] giorniDeiMesi = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        return giorniDeiMesi[month];
    }
}
