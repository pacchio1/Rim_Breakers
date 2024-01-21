package rimbreaker.backend.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rimbreaker.backend.service.InputService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/inputs")
@RequiredArgsConstructor
public class InputController {

    private final InputService inputService;

    @GetMapping("/EG")
    public ResponseEntity<?> getDateGame() {

        return inputService.SeVedemo();

    }
    
    @PostMapping("/GamesOggi")
    public ResponseEntity<?> GamesOggi(String password) {

        return inputService.RunApiGamesOggi(password);

    }

}
