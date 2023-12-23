package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.StandingsService;

@RestController
@RequestMapping("/standings")
@RequiredArgsConstructor
public class StandingsController {

    private final StandingsService standingsService;

    @GetMapping("/season")
    public ResponseEntity<?> getSeason(Long idLeague, Long teamId, String season) {

        return standingsService.getSeason(idLeague, teamId, season);

    }

}
