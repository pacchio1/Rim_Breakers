package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.GamesRepository;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class GamesService {

    private final GamesRepository gamesRepository;

    public ResponseEntity<?> getDateGame(int id_games) {

        return new ResponseEntity<>(gamesRepository.getDateGame(id_games), HttpStatus.OK);

    }

    public ResponseEntity<?> getStatusGame(int id_games) {

        return new ResponseEntity<>(gamesRepository.getStatusGame(id_games), HttpStatus.OK);

    }

    public ResponseEntity<?> getScoreHome(int id_games) {

        return new ResponseEntity<>(gamesRepository.getScoreHome(id_games), HttpStatus.OK);

    }

    public ResponseEntity<?> getScoreAway(int id_games) {

        return new ResponseEntity<>(gamesRepository.getScoreAway(id_games), HttpStatus.OK);

    }

    public ResponseEntity<?> getGamesByData(Date date) {

        return new ResponseEntity<>(gamesRepository.getGameByDate(date), HttpStatus.OK);

    }

}