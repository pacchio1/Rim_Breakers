package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import rimbreaker.backend.entity.PlayerFollowed;

import java.util.List;

public interface FavoritePlayerRepository extends JpaRepository<PlayerFollowed, Long> {

    @Modifying
    @Transactional
    @Query("INSERT INTO PlayerFollowed (idUser, idPlayer) VALUES (:idUser, :idPlayer)")
    void saveFavoritePlayer(@Param("idUser") Long idUser, @Param("idPlayer") Long idPlayer);

    @Query("SELECT pf FROM PlayerFollowed pf WHERE pf.idUser = :idUser")
    List<PlayerFollowed> getAllFavoritesByUserId(@Param("idUser") Long idUser);
    @Modifying
    @Transactional
    @Query("DELETE FROM PlayerFollowed pf WHERE pf.idUser = :idUser AND pf.idPlayer = :idPlayer")
    void removeFavoritePlayer(@Param("idUser") Long userId, @Param("idPlayer") Long idPlayer);

}
