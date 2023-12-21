package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;

import javax.xml.crypto.Data;
import java.util.List;

public interface GamesRepository extends JpaRepository<Games, Integer> {

    @Query("SELECT  date FROM Games g WHERE id_games = :id_games")
    Data getDateGame(@Param("id_games") int id_games);
    @Query("SELECT  status FROM Games g WHERE id_games = :id_games")
    String getStatusGame(@Param("id_games") int id_games);
    @Query("SELECT  score_home FROM Games g WHERE id_games = :id_games")
    String getScore_home(@Param("id_games") int id_games);
    @Query("SELECT score_away FROM Games g WHERE id_games = :id_games")
    String getScore_away(@Param("id_games") int id_games);
    @Query("SELECT * FROM Games g WHERE data = :id_games")
    List<Games> getGameByData(@Param("data") int date);

    Games save(Games games);
}
