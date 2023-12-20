package rimbreaker.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;
import rimbreaker.backend.entity.League;
import rimbreaker.backend.entity.Season;

import java.util.List;
public interface SeasonRepository extends JpaRepository<Season, Integer> {
    @Query("SELECT  Season FROM Season")
    List<String> getSeason();

    Season save(Season season);
}
