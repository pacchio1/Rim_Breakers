package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;
import rimbreaker.backend.entity.League;
import rimbreaker.backend.entity.Standings;

import javax.xml.crypto.Data;

public interface StandingsRepository extends JpaRepository<Standings, Integer> {

    @Query("FROM Standings s WHERE s.idLeague = :idLeague AND s.teamId = :teamId AND s.season = :season")
    Standings getSeason(@Param("idLeague") Long idLeague,
                        @Param("teamId") Long teamId,
                        @Param("season") String season);


}
