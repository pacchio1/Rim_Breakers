package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Team;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Long> {

    @Query("SELECT t.name, t.logo FROM Team t WHERE t.id = :id")
    String getTeam(@Param("id") Long id);

    @Query("FROM Team t WHERE t.id = :id")
    Team getAllByID(@Param("id") Long id);

    @Query("FROM Team t")
    List<Team> getAll();

    /*

    @Query("SELECT  FROM Team t WHERE t.id = :id")
    String getTeamLogo(@Param("id") Long id);

    */

}
