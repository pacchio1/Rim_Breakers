package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.StandingsService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/standings")
@RequiredArgsConstructor
public class StandingsController {

    private final StandingsService standingsService;

    //ritorna la stagione desiderata attraverso tre id diversi --> ricerca via filtri
    @GetMapping("/season")
    public ResponseEntity<?> getSeason(Long idLeague, Long teamId, String season) {

        return standingsService.getSeason(idLeague, teamId, season);

    }

    @GetMapping("/all_by_league")
    public ResponseEntity<?> getSeasonByLeague(Long idLeague, String season) {

        return standingsService.getSeasonByLeague(idLeague, season);

    }

}
