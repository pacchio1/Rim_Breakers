package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import rimbreaker.backend.entity.League;

import java.util.List;

public interface LeagueRepository extends JpaRepository<League, Integer> {

    @Query("SELECT l.name, l.logo FROM League l WHERE l.id_league = :id")
    List<String> getLeague(Long id);

    @Query("SELECT l.name, l.logo FROM League l")
    List<String> getLeagueAll();

    /*

    @Query("SELECT  FROM League l")
    List<String> getLeagueLogo(String logo);

    */

}
