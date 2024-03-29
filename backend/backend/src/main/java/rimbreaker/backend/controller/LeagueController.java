package rimbreaker.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import rimbreaker.backend.service.LeagueService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/league")
@RequiredArgsConstructor
public class LeagueController {

    private final LeagueService leagueService;

    //ritorna nome e logo per id --> sezione dettagli league
    @GetMapping("/number")
    public ResponseEntity<?> getLeague(Long id) {

        return leagueService.getLeague(id);

    }

    //ritorna tutta la tabella --> dashboard league
    @GetMapping("/all")
    public ResponseEntity<?> getLeagueAll() {

        return leagueService.getLeagueAll();

    }

    @GetMapping("/team_league")
    public ResponseEntity<?> getTeamLeague(Long id) {

        return leagueService.getTeamLeague(id);

    }

    @GetMapping("/league_country")
    public ResponseEntity<?> getLeagueByCountry(Long id) {

        return leagueService.getLeagueByCountry(id);

    }

    @GetMapping("/country_league")
    public ResponseEntity<?> getCountryByLeague() {

        return leagueService.getCountryByLeague();

    }


}
