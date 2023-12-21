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

    public ResponseEntity<?> getLeagueName(String name) {

        if (name == null) {

            return new ResponseEntity<>("League's name not found!", HttpStatus.BAD_REQUEST);

        }

        return new ResponseEntity<>(leagueRepository.getLeagueName(name), HttpStatus.OK);

    }

    public ResponseEntity<?> getLeagueLogo(String logo) {

        if (logo == null) {

            return new ResponseEntity<>("League's logo not found!", HttpStatus.BAD_REQUEST);

        }

        return new ResponseEntity<>(leagueRepository.getLeagueLogo(logo), HttpStatus.OK);

    }

}
