package rimbreaker.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rimbreaker.backend.payload.response.ResponseUser;
import rimbreaker.backend.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestParam String name, @RequestParam String surname, @RequestParam String email, @RequestParam String password) {
        userService.createUser(name, surname, email, password);
        return ResponseEntity.ok("User created successfully");
    }

    @GetMapping("/get")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        ResponseUser user = userService.getUserById(id);
        return ResponseEntity.ok(id);//fixare response Entity <?>
    }

    @GetMapping("/getByEmail")
    public ResponseEntity<?> getUserByEmail(@RequestParam String email) {
        ResponseUser user = userService.getUserByEmail(email);
        return ResponseEntity.ok(user);
    }
}
