package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;
import rimbreaker.backend.entity.League;
import rimbreaker.backend.entity.Standings;

import javax.xml.crypto.Data;

public interface StandingsRepository extends JpaRepository<Standings, Integer> {
        @Query("SELECT * FROM Standings s WHERE s.id_games = :idGames AND s.id_league = :idLeague AND s.id_team = :idTeam AND s.season = :season")
        Standings getSeason(@Param("idGames") Long idGames, @Param("idLeague") Long idLeague, @Param("idTeam") Long idTeam, @Param("season") String season);
    Standings save(Standings standings);
}
