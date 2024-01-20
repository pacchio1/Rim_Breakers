package rimbreaker.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rimbreaker.backend.entity.User;
import rimbreaker.backend.payload.response.ResponseUser;
import rimbreaker.backend.service.UserService;


import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/create")
    public ResponseEntity<?> createUser(String name, String surname, String email, String password) {

        userService.createUser(name, surname, email, password);

        return ResponseEntity.ok("User created successfully");

    }

    @GetMapping("/get")
    public ResponseEntity<?> getUserById(Long idUser) {

        ResponseUser user = userService.getUserById(idUser);

        return ResponseEntity.ok(user);

    }

    @GetMapping("/getEmail")
    public ResponseEntity<?> getUserByEmail(String email) {

        ResponseUser user = userService.getUserByEmail(email);

        return ResponseEntity.ok(user);

    }

    @PostMapping("/updateEmail")
    public ResponseEntity<?> updateEmail(String email, Long idUser) {

        userService.updateEmail(email, idUser);

        return ResponseEntity.ok("Email updated!");

    }

    @PostMapping("/updatePassword")
    public ResponseEntity<?> updatePassword(String password, Long idUser) {

        userService.updatePassword(password, idUser);

        return ResponseEntity.ok("Password updated!");

    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteUser(Long idUser) {

        userService.deleteUser(idUser);

        return ResponseEntity.ok("User successfully deleted!");

    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
        Optional<User> user = userService.login(email, password);
        if (user.isPresent()) {
            // Login riuscito
            return ResponseEntity.ok(Map.of(
                    "email", email,
                    "message", "success"
            ));
        } else {
            // Login fallito
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(
                    "email", email,
                    "message", "failure"
            ));
        }
    }

}
