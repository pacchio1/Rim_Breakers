package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import rimbreaker.backend.entity.TeamFollowed;

import java.util.List;

public interface FavoriteTeamRepository extends JpaRepository<TeamFollowed, Long> {

    @Modifying
    @Transactional
    @Query("INSERT INTO TeamFollowed (idUser, idTeam) VALUES (:idUser, :idTeam)")
    void saveFavoriteTeam(@Param("idUser") Long idUser, @Param("idTeam") Long idTeam);

    @Query("SELECT tf FROM TeamFollowed tf WHERE tf.idUser = :idUser")
    List<TeamFollowed> getAllFavoritesByUserId(@Param("idUser") Long idUser);
    
}
