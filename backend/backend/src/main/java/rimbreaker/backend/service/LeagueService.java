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

            return new ResponseEntity<>("Something went wrong! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getTeamLeague(Long id) {

        try {

            return new ResponseEntity<>(leagueRepository.getTeamLeague(id), HttpStatus.OK);

        }
        catch (Exception e) {

            return new ResponseEntity<>("Team not found or not present! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getLeagueByCountry(Long id) {

        try {

            return new ResponseEntity<>(leagueRepository.getLeagueByCountry(id), HttpStatus.OK);

        }
        catch (Exception e) {

            return new ResponseEntity<>("Team not found or not present! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }
    
    public ResponseEntity<?> getCountryByLeague() {

        try {

            return new ResponseEntity<>(leagueRepository.getCountryByLeague(), HttpStatus.OK);

        }
        catch (Exception e) {

            return new ResponseEntity<>("Something went wrong! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }


}
