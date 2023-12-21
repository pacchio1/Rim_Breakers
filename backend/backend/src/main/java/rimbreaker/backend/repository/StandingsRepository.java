package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;
import rimbreaker.backend.entity.League;
import rimbreaker.backend.entity.Standings;

public interface StandingsRepository extends JpaRepository<Standings, Integer> {
}
