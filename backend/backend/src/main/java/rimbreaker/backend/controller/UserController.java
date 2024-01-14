package rimbreaker.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rimbreaker.backend.payload.response.ResponseUser;
import rimbreaker.backend.service.UserService;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestParam String name,
                                        @RequestParam String surname,
                                        @RequestParam String email,
                                        @RequestParam String password) {

        userService.createUser(name, surname, email, password);

        return ResponseEntity.ok("User created successfully");

    }

    @GetMapping("/get")
    public ResponseEntity<?> getUserById(Long idUser) {

        ResponseUser user = userService.getUserById(idUser);

        return ResponseEntity.ok(user);

    }

    @GetMapping("/getEmail")
    public ResponseEntity<?> getUserByEmail(@RequestParam("email") String email) {

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



}
