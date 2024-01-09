package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import rimbreaker.backend.entity.Player;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("SELECT p FROM Player p WHERE p.idPlayer = :id")
    Player getPlayerById(Long id);

    @Query("SELECT p FROM Player p")
    List<Player> getAllPlayers();
}
