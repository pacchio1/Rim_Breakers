package rimbreaker.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

@Entity
@Table(name = "user")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_user")
    private Long idUser;

    @NotBlank
    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "surname")
    private String surname;

    @NotBlank
    @Email
    @Column(name = "email", unique = true)
    private String email;

    @NotBlank
    @Length(min = 6) // Imposta una lunghezza minima della password
    @Column(name = "password")
    private String password;

    public User(String name, String surname, String email, String password) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = encodePassword(password);
    }

    private String encodePassword(String password) {
        try {
            // Genera un salt casuale
            SecureRandom random = new SecureRandom();
            byte[] salt = new byte[16];
            random.nextBytes(salt);

            // Aggiunge il salt alla password
            String passwordWithSalt = password + bytesToHex(salt);

            // Crea l'istanza di MessageDigest con SHA-256
            MessageDigest md = MessageDigest.getInstance("SHA-256");

            // Esegue l'hash della password con salt
            byte[] hashedPassword = md.digest(passwordWithSalt.getBytes());

            // Converte l'hash in formato esadecimale
            return bytesToHex(hashedPassword);

        } catch (NoSuchAlgorithmException e) {
            // Gestione dell'eccezione (potrebbe essere opportuno loggare l'errore)
            throw new RuntimeException("Errore durante l'hash della password.", e);
        }
    }

    // Metodo per convertire un array di byte in formato esadecimale
    private String bytesToHex(byte[] bytes) {
        StringBuilder result = new StringBuilder();
        for (byte b : bytes) {
            result.append(String.format("%02x", b));
        }
        return result.toString();
    }


}
