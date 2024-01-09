package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.PlayerRepository;

@Service
@RequiredArgsConstructor
public class PlayerService {

    private final PlayerRepository playerRepository;

    public ResponseEntity<?> getPlayerById(Long id) {

        try {

            return new ResponseEntity<>(playerRepository.getPlayerById(id), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("Player not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getPlayersByTeam(Long id_team) {

        try {

            return new ResponseEntity<>(playerRepository.getPlayersByTeam(id_team), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("Something went wrong! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getAllPlayers() {

        try {

            return new ResponseEntity<>(playerRepository.getAllPlayers(), HttpStatus.OK);

        }
        catch(Exception e){

            return new ResponseEntity<>("Something went wrong! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }


}
