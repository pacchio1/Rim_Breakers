package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.GamesService;

import java.util.Date;

@RestController
@RequestMapping("/games")
@RequiredArgsConstructor
public class GamesController {

    private final GamesService gamesService;

    @GetMapping("/dates")
    public ResponseEntity<?> getDateGame(int id_games) {

        return gamesService.getDateGame(id_games);


    }

    @GetMapping("/status")
    public ResponseEntity<?> getStatusGame(int id_games) {

        return gamesService.getStatusGame(id_games);

    }

    @GetMapping("/score_home")
    public ResponseEntity<?> getScoreHome(int id_games) {

        return gamesService.getScoreHome(id_games);

    }

    @GetMapping("/score_away")
    public ResponseEntity<?> getScoreAway(int id_games) {

        return gamesService.getScoreAway(id_games);

    }

    @GetMapping("/all_by_date")
    public ResponseEntity<?> getGamesByDate(Date date) {

        return gamesService.getGamesByData(date);

    }


}
