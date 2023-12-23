package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {

    @Query("SELECT t.name, t.logo FROM Team t WHERE t.id = :id")
    String getTeam(@Param("id") Long id);

    /*
    @Query("SELECT t.name FROM Team t WHERE t.id = :id")
    String getTeamName(@Param("id") Long id);

    @Query("SELECT t.logo FROM Team t WHERE t.id = :id")
    String getTeamLogo(@Param("id") Long id);
    */

}
