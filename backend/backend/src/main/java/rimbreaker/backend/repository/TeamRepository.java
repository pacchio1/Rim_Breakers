package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Games;
import rimbreaker.backend.entity.League;
import rimbreaker.backend.entity.Standings;
import rimbreaker.backend.entity.Team;

public interface TeamRepository extends JpaRepository<Team, Integer> {
    @Query("SELECT Name FROM Team")
    String getName(@Param("idTeam") int id);
    @Query("SELECT logo FROM Team")
    String getLogo(@Param("idTeam") int id);

    Team save(Team team);
}
