package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.League;

import java.util.List;

public interface LeagueRepository extends JpaRepository<League, Integer> {

    @Query("SELECT l.name FROM League l")
    List<String> getLeagueName();

    @Query("SELECT l.logo FROM League l")
    List<String> getLeagueLogo();

    League save(League league);
}
