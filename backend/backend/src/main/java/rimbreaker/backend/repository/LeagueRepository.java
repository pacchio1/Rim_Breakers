package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import rimbreaker.backend.entity.League;

import java.util.List;

public interface LeagueRepository extends JpaRepository<League, Integer> {

    @Query("SELECT l.name FROM League l")
    List<String> getLeagueName(String name);

    @Query("SELECT l.logo FROM League l")
    List<String> getLeagueLogo(String logo);

}
