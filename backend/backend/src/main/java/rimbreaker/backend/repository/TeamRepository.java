package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Team;
import rimbreaker.backend.payload.response.ResponseTeam;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Long> {

    @Query("SELECT t.name, t.logo FROM Team t WHERE t.id = :id")
    String getTeam(@Param("id") Long id);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseTeam(" +
            "t.id, " +
            "l.id_league, " +
            "t.id_country, " +
            "t.name, " +
            "t.logo" +
            ") FROM Team t " +
            "JOIN League l ON l.id_league = t.id_league " +
            "WHERE t.id = :id")
    ResponseTeam getAllByID(@Param("id") Long id);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseTeam(" +
            "t.id, " +
            "l.id_league, " +
            "t.id_country, " +
            "t.name, " +
            "t.logo" +
            ") FROM Team t " +
            "JOIN League l ON l.id_league = t.id_league")
    List<ResponseTeam> getAll();

}
