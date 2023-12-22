package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.GamesService;

import java.util.Date;

@RestController
@RequestMapping("games")
@RequiredArgsConstructor
public class GamesController {

    private final GamesService gamesService;

    @GetMapping("/dates/{id_games}")
    public ResponseEntity<?> getDateGame(int id_games) {

        return gamesService.getDateGame(id_games);


    }

    @GetMapping("/status/{id_games}")
    public ResponseEntity<?> getStatusGame(int id_games) {

        return gamesService.getStatusGame(id_games);

    }

    @GetMapping("/score_home/{id_games}")
    public ResponseEntity<?> getScoreHome(int id_games) {

        return gamesService.getScoreHome(id_games);

    }

    @GetMapping("/score_away/{id_games}")
    public ResponseEntity<?> getScoreAway(int id_games) {

        return gamesService.getScoreAway(id_games);

    }

    @GetMapping("/all_by_date/{date}")
    public ResponseEntity<?> getGamesByDate(Date date) {

        return gamesService.getGamesByData(date);

    }


}
