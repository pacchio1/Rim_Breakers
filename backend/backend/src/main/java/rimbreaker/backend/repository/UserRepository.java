package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import org.springframework.transaction.annotation.Transactional;
import rimbreaker.backend.entity.User;
import rimbreaker.backend.payload.response.ResponseUser;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Modifying
    @Transactional
    @Query("INSERT INTO User (name, surname, email, password) VALUES (:name, :surname, :email, :password)")
    void newUser(@Param("name") String name, @Param("surname") String surname, @Param("email") String email, @Param("password") String password);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseUser(u.name, u.surname, u.email) FROM User u WHERE u.idUser = :idUser")
    ResponseUser all_by_id(@Param("idUser") Long idUser);



    @Query("SELECT new rimbreaker.backend.payload.response.ResponseUser(u.name, u.surname, u.email) FROM User u WHERE email = :email")
    ResponseUser findByEmail(@Param("email") String email);




}