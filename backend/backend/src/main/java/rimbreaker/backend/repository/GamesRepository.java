package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

public interface GamesRepository extends JpaRepository<Games, Integer> {

    @Query("SELECT date FROM Games g WHERE id_games = :id_games")
    Data getDateGame(@Param("id_games") int id_games);

    @Query("SELECT status FROM Games g WHERE id_games = :id_games")
    String getStatusGame(@Param("id_games") int id_games);

    @Query("SELECT score_home FROM Games g WHERE id_games = :id_games")
    String getScoreHome(@Param("id_games") int id_games);

    @Query("SELECT score_away FROM Games g WHERE id_games = :id_games")
    String getScoreAway(@Param("id_games") int id_games);

    @Query("FROM Games g WHERE date = :date")
    List<Games> getGameByDate(@Param("date") Date date);

    Games save(Games games);
}
