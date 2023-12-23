package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.TeamRepository;

@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepository teamRepository;

    public ResponseEntity<?> getTeam(Long id) {

        try {

            return new ResponseEntity<>(teamRepository.getTeam(id), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("Team not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    /*
    public ResponseEntity<?> getTeamName(Long id) {

        return new ResponseEntity<>(teamRepository.getTeamName(id), HttpStatus.OK);

    }

    public ResponseEntity<?> getTeamLogo(Long id) {

        return new ResponseEntity<>(teamRepository.getTeamLogo(id), HttpStatus.OK);

    }
    */

}
