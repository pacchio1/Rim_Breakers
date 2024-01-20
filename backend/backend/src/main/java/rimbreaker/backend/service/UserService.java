package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rimbreaker.backend.entity.User;
import rimbreaker.backend.payload.response.ResponseUser;
import rimbreaker.backend.repository.UserRepository;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User createUser(String name, String surname, String email, String password) {

        try {

            // Create MessageDigest instance for MD5
            MessageDigest md = MessageDigest.getInstance("MD5");

            // Update the message digest with the input data
            md.update(password.getBytes());

            // Get the MD5 hash
            byte[] md5Hash = md.digest();

            // Convert the byte array to a hexadecimal string
            StringBuilder hexStringBuilder = new StringBuilder();
            for (byte b : md5Hash) {
                hexStringBuilder.append(String.format("%02x", b));
            }
            // Print the MD5 hash
            password= hexStringBuilder.toString();

        } catch (NoSuchAlgorithmException e) {

            e.printStackTrace();

        }

        userRepository.newUser(name, surname, email, password);

        return null;
    }

    public ResponseUser getUserById(Long idUser) {

        return userRepository.all_by_id(idUser);

    }

    public ResponseUser getUserByEmail(String email) {

        return userRepository.findByEmail(email);

    }

    public void updateEmail(String email, Long idUser) {

        userRepository.updateEmail(email, idUser);

    }

    public void updatePassword(String password, Long idUser) {

        userRepository.updatePassword(password, idUser);

    }

    public void deleteUser(Long idUser) {

        userRepository.deleteUser(idUser);

    }

    public Optional<User> login(String email, String password) {
        try {

            // Create MessageDigest instance for MD5
            MessageDigest md = MessageDigest.getInstance("MD5");

            // Update the message digest with the input data
            md.update(password.getBytes());

            // Get the MD5 hash
            byte[] md5Hash = md.digest();

            // Convert the byte array to a hexadecimal string
            StringBuilder hexStringBuilder = new StringBuilder();

            for (byte b : md5Hash) {

                hexStringBuilder.append(String.format("%02x", b));

            }

            // Print the MD5 hash
            password= hexStringBuilder.toString();

        } catch (NoSuchAlgorithmException e) {

            e.printStackTrace();

        }

        return userRepository.login(email, password);

    }

}
