package rimbreaker.backend.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Favorite;


import java.util.List;


public interface FavoriteRepository  extends JpaRepository<Favorite, Integer> {
    @Transactional
    @Modifying
    @Query("INSERT INTO Favorite (id) VALUES ()")
    void salvaFavoriteTeam(@Param("idUtente") Integer idUtente, @Param("idTeam") Integer idTeam);//aggiungere id team
    @Transactional
    @Modifying
    @Query("INSERT INTO Favorite (id) VALUES ()")
    void salvaFavoritePlayer(@Param("idUtente") Integer idUtente, @Param("idPlayer") Integer idPlayer);//aggiungere id player
    @Transactional
    @Modifying
    @Query("INSERT INTO Favorite (id) VALUES ()")
    void salvaFavoriteLeague(@Param("idUtente") Integer idUtente, @Param("idLeague") Integer idLeague);//aggiungere id favorite league

    @Query("FROM Favorite p WHERE p.id_User = :id")
    List<Favorite> getTuttiFavorite(@Param("id") Long idUser);
}
