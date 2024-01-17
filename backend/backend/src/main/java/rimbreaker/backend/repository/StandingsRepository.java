package rimbreaker.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Standings;

public interface StandingsRepository extends JpaRepository<Standings, Integer> {

    @Query("FROM Standings s WHERE s.idLeague = :idLeague AND s.teamId = :teamId AND s.season = :season")
    Standings getSeason(@Param("idLeague") Long idLeague,
                        @Param("teamId") Long teamId,
                        @Param("season") String season);

    @Query("FROM Standings s WHERE s.teamId = :teamId AND s.season = :season")
    List<Standings> all_by_team(@Param("teamId") Long teamId,
                               @Param("season") String season);
}
