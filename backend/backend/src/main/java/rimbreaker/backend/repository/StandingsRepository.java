package rimbreaker.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Standings;
import rimbreaker.backend.payload.response.ResponseStandingsTeam;

public interface StandingsRepository extends JpaRepository<Standings, Integer> {

    @Query("FROM Standings s WHERE s.idLeague = :idLeague AND s.teamId = :teamId AND s.season = :season")
    Standings getSeason(@Param("idLeague") Long idLeague,
                        @Param("teamId") Long teamId,
                        @Param("season") String season);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseStandingsTeam(s, t.name, t.logo) " +
            "FROM Standings s " +
            "JOIN Team t ON s.teamId = t.id " +
            "WHERE s.idLeague = :idLeague AND s.season = :season")
    List<ResponseStandingsTeam> getSeasonByLeague(@Param("idLeague") Long idLeague,
                                              @Param("season") String season);

}
