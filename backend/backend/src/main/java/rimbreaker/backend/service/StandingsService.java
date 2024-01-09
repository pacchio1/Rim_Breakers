package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.StandingsRepository;

@Service
@RequiredArgsConstructor
public class StandingsService {

    private final StandingsRepository standingsRepository;

    public ResponseEntity<?> getSeason(Long idLeague, Long teamId, String season) {

        try {

            return new ResponseEntity<>(standingsRepository.getSeason(idLeague, teamId, season), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("Season not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }
        
    }

}
