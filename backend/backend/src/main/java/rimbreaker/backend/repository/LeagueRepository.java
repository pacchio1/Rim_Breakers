package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.League;
import rimbreaker.backend.payload.response.ResponseLeague;
import rimbreaker.backend.payload.response.ResponseLeagueCountry;

import java.util.List;

public interface LeagueRepository extends JpaRepository<League, Integer> {

    @Query("SELECT l.id_league, l.name, l.logo FROM League l WHERE l.id_league = :id")
    Object getLeague(@Param("id") Long id);

    @Query("SELECT l.id_league, l.name, l.logo FROM League l")
    Object getLeagueAll();

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

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseLeagueCountry(" +
            "c.id_country, " +
            "l.id_league, " +
            "c.flag, " +
            "c.name AS nameCountry, " +
            "l.logo, " +
            "l.name AS nameLeague" +
            ") FROM League l " +
            "JOIN Country c ON c.id_league = l.id_league " +
            "WHERE c.id_country = :id_country")
    List<ResponseLeagueCountry> getLeagueByCountry(@Param("id_country") Long id);

}
