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

    @GetMapping("/{name}")
    public ResponseEntity<?> getLeagueName(String name) {

        return leagueService.getLeagueName(name);

    }

    @GetMapping("/{logo}")
    public ResponseEntity<?> getLeagueLogo(String logo) {

        return leagueService.getLeagueLogo(logo);

    }

}
