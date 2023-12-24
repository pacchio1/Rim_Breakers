package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.entity.Games;

import rimbreaker.backend.payload.response.ResponseTeamsGame;
import rimbreaker.backend.repository.GamesRepository;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class GamesService {

    private final GamesRepository gamesRepository;
    /*
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


    public  ResponseEntity<?> getNamesOfTeams(int id_games){
        return new ResponseEntity<>(gamesRepository.getNamesOfTeams(id_games), HttpStatus.OK);
    }
    */
    public ResponseEntity<?> getAllGamesWithTeams(int id_games) {
        return new ResponseEntity<>(gamesRepository.getAllGamesWithTeams(id_games), HttpStatus.OK);
    }
    public ResponseEntity<?> getGamesByDate(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date parsedDate = dateFormat.parse(date);

            List<ResponseTeamsGame> games = gamesRepository.getGameByDate(new java.sql.Date(parsedDate.getTime()));

            return new ResponseEntity<>(games, HttpStatus.OK);
        } catch (ParseException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Invalid date format. Please use 'yyyy-MM-dd'.", HttpStatus.BAD_REQUEST);
        }
    }
}