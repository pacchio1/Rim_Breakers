package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Player;
import rimbreaker.backend.payload.response.ResponsePlayer;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("SELECT p FROM Player p WHERE p.idPlayer = :id")
    Player getPlayerById(@Param("id") Long id);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponsePlayer(" +
            "t.id, " +
            "p.idPlayer, " +
            "p.season, " +
            "p.name, " +
            "p.surname" +
            ") FROM Player p " +
            "JOIN Team t ON t.id = p.idTeam " +
            "WHERE p.idTeam = :id_team")
    List<ResponsePlayer> getPlayersByTeam(@Param("id_team") Long id_team);

    @Query("SELECT p FROM Player p")
    List<Player> getAllPlayers();
}
