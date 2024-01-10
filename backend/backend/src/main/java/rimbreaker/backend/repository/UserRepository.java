package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import rimbreaker.backend.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    /*User save(User User); // Salva un User nel database Create/Update

    void deleteByEmail(String email); // Cancella un User per mail Delete

    List<User> findAll(); // Restituisce tutti gli utenti nel database

    @Query("SELECT u FROM User u WHERE u.id_User = :IdUser")
    Optional<User> findByIdUser(@Param("IdUser") int IdUser); // Trova un User per email

    @Query() // query per lista (di cose salvate dal utente) di un User
    List<Favorite> eventiUser (@Param("email") String email);

    void save(Favorite favorite); // agiungi prefe

    Optional<User> findByEmail(String email);
    //quando si aggiunge user si deve mettere l' id in favorite.idUser */

}