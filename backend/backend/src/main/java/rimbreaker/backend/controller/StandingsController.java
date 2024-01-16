package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.StandingsService;

@RestController
@RequestMapping("/standings")
@RequiredArgsConstructor
@CrossOrigin
public class StandingsController {

    private final StandingsService standingsService;

    //ritorna la stagione desiderata attraverso tre id diversi --> ricerca via filtri?
    //NOTA: vedere di trovare miglior soluzione di ricerca o informare la sezione Front-End di aggiungere dei dropdown menu per gli id
    @GetMapping("/season")
    public ResponseEntity<?> getSeason(Long idLeague, Long teamId, String season) {

        return standingsService.getSeason(idLeague, teamId, season);

    }

}
