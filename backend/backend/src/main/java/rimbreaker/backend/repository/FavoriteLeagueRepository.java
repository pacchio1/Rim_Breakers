package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import rimbreaker.backend.entity.LeagueFollowed;

import java.util.List;

public interface FavoriteLeagueRepository extends JpaRepository<LeagueFollowed, Long> {

    @Modifying
    @Transactional
    @Query("INSERT INTO LeagueFollowed (idUser, idLeague) VALUES (:idUser, :idLeague)")
    void saveFavoriteLeague(@Param("idUser") Long idUser, @Param("idLeague") Long idLeague);

    @Query("SELECT lf FROM LeagueFollowed lf WHERE lf.idUser = :idUser")
    List<LeagueFollowed> getAllFavoritesByUserId(@Param("idUser") Long idUser);
    @Modifying
    @Transactional
    @Query("DELETE FROM LeagueFollowed lf WHERE lf.idUser = :idUser AND lf.idLeague = :idLeague")
    void removeFavoriteLeague(@Param("idUser") Long userId, @Param("idLeague") Long leagueId);


}
