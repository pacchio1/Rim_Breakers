package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.League;
import rimbreaker.backend.payload.response.ResponseLeague;

import java.util.List;

public interface LeagueRepository extends JpaRepository<League, Integer> {

    @Query("SELECT l.name, l.logo FROM League l WHERE l.id_league = :id")
    List<String> getLeague(Long id);

    @Query("SELECT l.name, l.logo FROM League l")
    List<String> getLeagueAll();

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseLeague(" +
            "t.id, " +
            "l.id_league, " +
            "l.name AS nameLeague, " +
            "t.name AS nameTeam, " +
            "t.logo AS logoTeam" +
            ") FROM League l " +
            "JOIN Team t ON t.id_league = l.id_league " +
            "WHERE l.id_league = :id")
    List<ResponseLeague> getTeamLeague(@Param("id") Long id);

    /*

    @Query("SELECT  FROM League l")
    List<String> getLeagueLogo(String logo);

    */

}
