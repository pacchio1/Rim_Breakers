package rimbreaker.backend.service;

import org.springframework.stereotype.Service;
import rimbreaker.backend.entity.User;
import rimbreaker.backend.payload.response.ResponseUser;
import rimbreaker.backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void createUser(String name, String surname, String email, String password) {

        userRepository.newUser(name, surname, email, password);

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

}
