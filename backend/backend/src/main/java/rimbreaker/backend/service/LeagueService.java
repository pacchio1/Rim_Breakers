package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.LeagueRepository;

@Service
@RequiredArgsConstructor
public class LeagueService {

    private final LeagueRepository leagueRepository;

    public ResponseEntity<?> getLeague(Long id) {

        try {

            return new ResponseEntity<>(leagueRepository.getLeague(id), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("League not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }
    public ResponseEntity<?> getLeagueAll() {

        try {

            return new ResponseEntity<>(leagueRepository.getLeagueAll(), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("League's name not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }
    /*


    public ResponseEntity<?> getLeagueLogo(String logo) {

        try {

            return new ResponseEntity<>(leagueRepository.getLeagueLogo(logo), HttpStatus.OK);

        }
        catch (Exception e) {

            return new ResponseEntity<>("League's logo not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }
    */


}
