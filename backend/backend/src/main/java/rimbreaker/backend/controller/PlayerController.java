package rimbreaker.backend.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import rimbreaker.backend.service.PlayerService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/player")
public class PlayerController {

        private final PlayerService playerService;

        // Returns player details by ID
        @GetMapping("/number")
        public ResponseEntity<?> getPlayerById(Long id) {

            return playerService.getPlayerById(id);

        }

        // Returns all players
        @GetMapping("/all")
        public ResponseEntity<?> getAllPlayers() {

            return playerService.getAllPlayers();

        }

        @GetMapping("/team")
        public ResponseEntity<?> getPlayersByTeam(Long id_team) {

            return playerService.getPlayersByTeam(id_team);

        }
}
