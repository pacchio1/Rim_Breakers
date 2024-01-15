package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rimbreaker.backend.service.GamesService;

@RestController
@RequestMapping("/games")
@RequiredArgsConstructor
@CrossOrigin
public class GamesController {

    private final GamesService gamesService;

    /*

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


    @GetMapping("/team_playing")
    public ResponseEntity<?> getNamesOfTeams(int id_games) {

        return gamesService.getNamesOfTeams(id_games);
    }

   */

    //ritorna tutti i giochi avvenuti durante quella giornata --> ricerca per data (specifica)
    @GetMapping("/all_by_date")
    public ResponseEntity<?> getGamesByDate(@RequestParam("date") String date) {

        return gamesService.getGamesByDate(date);

    }

    //ritorna tutti i giochi avvenuti attraverso id_games --> dettagli games
    @GetMapping("/all_by_id")
    public ResponseEntity<?> getAllGamesWithTeams(int id_games) {

        return gamesService.getAllGamesWithTeams(id_games);

    }

    @GetMapping("/games_country")
    public ResponseEntity<?> getGamesByCountry(Long id) {

        return gamesService.getGamesByCountry(id);

    }

    @GetMapping("/games_team")
    public ResponseEntity<?> getGamesByTeam(String name) {

        return gamesService.getGamesByTeam(name);

    }

    @GetMapping("/games_league")
    public ResponseEntity<?> getGamesByLeague(String name) {

        return gamesService.getGamesByLeague(name);

    }

}
