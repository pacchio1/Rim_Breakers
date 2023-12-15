package rimbreaker.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import rimbreaker.backend.service.LeagueService;

@RestController
@RequestMapping("league")
@RequiredArgsConstructor
public class LeagueController {

    private final LeagueService leagueService;

    @GetMapping("/league_name")
    public ResponseEntity<?> getLeagueName() {

        return leagueService.getLeagueName();

    }

    @GetMapping("/league_logo")
    public ResponseEntity<?> getLeagueLogo() {

        return leagueService.getLeagueLogo();

    }

}
