package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;
import rimbreaker.backend.payload.response.ResponseGame;
import rimbreaker.backend.payload.response.ResponseGameCountry;
import rimbreaker.backend.payload.response.ResponseGameLeague;
import rimbreaker.backend.payload.response.ResponseGameTeam;

import java.sql.Date;
import java.util.List;

public interface GamesRepository extends JpaRepository<Games, Integer> {
/*
    @Query("SELECT date FROM Games g WHERE id_games = :id_games")
    Data getDateGame(@Param("id_games") int id_games);

    @Query("SELECT status FROM Games g WHERE id_games = :id_games")
    String getStatusGame(@Param("id_games") int id_games);

    @Query("SELECT score_home FROM Games g WHERE id_games = :id_games")
    String getScoreHome(@Param("id_games") int id_games);

    @Query("FROM Games g WHERE date = :date")
    List<Games> getGameByDate(@Param("date") Date date);
*/
    @Query("SELECT new rimbreaker.backend.payload.response.ResponseGame(g.id_games, " +
            "g.leagueId, " +
            "g.date, " +
            "g.status, " +
            "g.homeId, " +
            "g.score_home, " +
            "g.awayId, " +
            " g.score_away, " +
            "th.name AS teamHome, " +
            "ta.name AS teamAway" +
            ") FROM Games g " +
            "JOIN Team th ON g.homeId = th.id " +
            "JOIN Team ta ON g.awayId = ta.id " +
            "WHERE g.date = :date")
    List<ResponseGame> getGameByDate(@Param("date") Date date);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseGame(" +
            "g.id_games, " +
            "g.leagueId, " +
            "g.date, " +
            "g.status, " +
            "g.homeId, " +
            "g.score_home AS scoreHome, " +
            "g.awayId, " +
            "g.score_away AS scoreAway, " +
            "th.name AS teamHome, " +
            "ta.name AS teamAway" +
            ") FROM Games g " +
            "JOIN Team th ON g.homeId = th.id " +
            "JOIN Team ta ON g.awayId = ta.id " +
            "WHERE g.id_games = :id_games")
    List<ResponseGame> getAllGamesWithTeams(@Param("id_games") int id_games);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseGameCountry(" +
            "c.id_country, " +
            "g.id_games, " +
            "c.flag, " +
            "c.name AS nameCountry, " +
            "g.leagueId AS id_league, " +
            "g.date, " +
            "g.status, " +
            "th.logo AS logoHome, " +
            "th.name AS teamHome, " +
            "ta.logo AS logoAway, " +
            "ta.name AS teamAway, " +
            "g.homeId, " +
            "g.score_home AS scoreHome, " +
            "g.awayId, " +
            "g.score_away AS scoreAway" +
            ") FROM Games g " +
            "JOIN Team th ON g.homeId = th.id " +
            "JOIN Team ta ON g.awayId = ta.id " +
            "JOIN Country c ON c.id_league = g.leagueId " +
            "WHERE c.id_country = :id_country " +
            "ORDER BY g.id_games " +
            "DESC " +
            "LIMIT 6")
    List<ResponseGameCountry> getGamesByCountry(@Param("id_country") Long id);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseGameTeam(" +
            "g.id_games, " +
            "g.leagueId," +
            "g.date, " +
            "g.status, " +
            "th.logo AS logoHome, " +
            "th.name AS teamHome, " +
            "ta.logo AS logoAway, " +
            "ta.name AS teamAway, " +
            "g.homeId, " +
            "g.score_home AS scoreHome, " +
            "g.awayId, " +
            "g.score_away AS scoreAway" +
            ") FROM Games g " +
            "JOIN Team th ON g.homeId = th.id " +
            "JOIN Team ta ON g.awayId = ta.id " +
            "WHERE th.name = :name " +
            "OR ta.name = :name " +
            "ORDER BY g.id_games " +
            "DESC " +
            "LIMIT 6")
    List<ResponseGameTeam> getGamesByTeam(@Param("name") String name);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseGameLeague(" +
            "g.id_games, " +
            "l.id_league, " +
            "l.name AS nameLeague, " +
            "g.date, " +
            "g.status, " +
            "th.logo AS logoHome, " +
            "th.name AS teamHome, " +
            "ta.logo AS logoAway, " +
            "ta.name AS teamAway, " +
            "g.homeId, " +
            "g.score_home AS scoreHome, " +
            "g.awayId, " +
            "g.score_away AS scoreAway" +
            ") FROM Games g " +
            "JOIN Team th ON g.homeId = th.id " +
            "JOIN Team ta ON g.awayId = ta.id " +
            "JOIN League l ON l.id_league = g.leagueId " +
            "WHERE l.name = :name " +
            "ORDER BY g.id_games " +
            "DESC " +
            "LIMIT 6")
    List<ResponseGameLeague> getGamesByLeague(@Param("name") String name);

}
