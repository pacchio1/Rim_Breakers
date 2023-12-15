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

    public ResponseEntity<?> getLeagueName() {

        return new ResponseEntity<>(leagueRepository.getLeagueName(), HttpStatus.OK);

    }

    public ResponseEntity<?> getLeagueLogo() {

        return new ResponseEntity<>(leagueRepository.getLeagueLogo(), HttpStatus.OK);

    }

}
