package rimbreaker.backend.service;

import org.springframework.stereotype.Service;
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

    public ResponseUser getUserById(Long id) {
        return userRepository.all_by_id(id);
    }

    public ResponseUser getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
