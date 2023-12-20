package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.GamesRepository;

@Service
@RequiredArgsConstructor
public class GamesService {

    private final GamesRepository gamesRepository;

    public ResponseEntity<?> getTeamHome(int id_games) {

        return new ResponseEntity<>(gamesRepository.getTeamHome(id_games), HttpStatus.OK);

    }

}
