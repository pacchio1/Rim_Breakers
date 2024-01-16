package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Player;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("SELECT p FROM Player p WHERE p.idPlayer = :id")
    Player getPlayerById(@Param("id") Long id);

    @Query("SELECT p FROM Player p " +
            "JOIN Team t ON t.id = p.idTeam " +
            "WHERE p.idTeam = :id_team")
    List<Player> getPlayersByTeam(@Param("id_team") Long id_team);

    @Query("SELECT p FROM Player p")
    List<Player> getAllPlayers();
}
