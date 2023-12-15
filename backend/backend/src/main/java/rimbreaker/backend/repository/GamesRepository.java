package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;

import java.util.List;

public interface GamesRepository extends JpaRepository<Games, Integer> {

    @Query("SELECT  date, status, id_home, score_home, id_away, score_away FROM Games g WHERE id_games = :id_games")
    List<Games> getTeamHome(@Param("id_games") int id_games);

    Games save(Games games);
}
