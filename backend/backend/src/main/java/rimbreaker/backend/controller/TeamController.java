package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.TeamService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/team")
@RequiredArgsConstructor
public class TeamController {

    private final TeamService teamService;

    //ritorna nome e logo del team per id --> sezione dettagli squadra
    @GetMapping("/number")
    public ResponseEntity<?> getTeam(Long id) {

        return teamService.getTeam(id);

    }

    //ritorna tutte le info specificate per id --> ricerca più specifica attraverso league?
    @GetMapping("/all_by_id")
    public ResponseEntity<?> getAllByID(Long id) {

        return teamService.getAllByID(id);

    }

    //ritorna tutta la tabella --> dashboard team
    @GetMapping("/all")
    public ResponseEntity<?> getAll() {

        return teamService.getAll();

    }

}
