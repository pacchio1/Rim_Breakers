package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;
import rimbreaker.backend.payload.response.ResponseTeamsGame;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

public interface GamesRepository extends JpaRepository<Games, Integer> {

//    @Query("SELECT date FROM Games g WHERE id_games = :id_games")
//    Data getDateGame(@Param("id_games") int id_games);
//
//    @Query("SELECT status FROM Games g WHERE id_games = :id_games")
//    String getStatusGame(@Param("id_games") int id_games);
//
//    @Query("SELECT score_home FROM Games g WHERE id_games = :id_games")
//    String getScoreHome(@Param("id_games") int id_games);

//    @Query("FROM Games g WHERE date = :date")
//    List<Games> getGameByDate(@Param("date") Date date);
    @Query("SELECT new rimbreaker.backend.payload.response.ResponseTeamsGame(g.id_games, g.leagueId, g.date, g.status, g.score_home, g.score_away, th.name AS teamHome, ta.name AS teamAway) FROM Games g JOIN Team th ON g.homeId = th.id JOIN Team ta ON g.awayId = ta.id WHERE date = :date")
    List<ResponseTeamsGame> getGameByDate(@Param("date") Date date);


    @Query("SELECT new rimbreaker.backend.payload.response.ResponseTeamsGame(g.id_games, g.leagueId, g.date, g.status, g.score_home, g.score_away, th.name AS teamHome, ta.name AS teamAway) FROM Games g JOIN Team th ON g.homeId = th.id JOIN Team ta ON g.awayId = ta.id WHERE id_games = :id_games")
    List<ResponseTeamsGame> getAllGamesWithTeams(@Param("id_games") int id_games);






}
