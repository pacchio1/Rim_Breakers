package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.GamesService;

import java.sql.Timestamp;
import java.text.ParseException;
import java.util.Date;

@RestController
@RequestMapping("/games")
@RequiredArgsConstructor
public class GamesController {

    private final GamesService gamesService;

//    @GetMapping("/dates")
//    public ResponseEntity<?> getDateGame(int id_games) {
//
//        return gamesService.getDateGame(id_games);
//
//
//    }
//
//    @GetMapping("/status")
//    public ResponseEntity<?> getStatusGame(int id_games) {
//
//        return gamesService.getStatusGame(id_games);
//
//    }
//
//    @GetMapping("/score_home")
//    public ResponseEntity<?> getScoreHome(int id_games) {
//
//        return gamesService.getScoreHome(id_games);
//
//    }
//
//    @GetMapping("/score_away")
//    public ResponseEntity<?> getScoreAway(int id_games) {
//
//        return gamesService.getScoreAway(id_games);
//
//    }
//
//
//    @GetMapping("/team_playing")
//    public ResponseEntity<?> getNamesOfTeams(int id_games) {
//
//        return gamesService.getNamesOfTeams(id_games);
//    }
    @GetMapping("/all_by_date")
    public ResponseEntity<?> getGamesByDate(@RequestParam("date") String date) {
        return gamesService.getGamesByDate(date);
    }
    @GetMapping("/all_by_id")
    public ResponseEntity<?> getGamesByDate(int id_games) {

        return gamesService.getAllGamesWithTeams(id_games);

    }


}
