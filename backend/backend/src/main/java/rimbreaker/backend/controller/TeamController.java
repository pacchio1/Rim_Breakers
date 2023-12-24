package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.TeamService;

@RestController
@RequestMapping("/team")
@RequiredArgsConstructor
public class TeamController {

    private final TeamService teamService;

    @GetMapping("/number")
    public ResponseEntity<?> getTeam(Long id) {

        return teamService.getTeam(id);

    }
    @GetMapping("/all_by_id")
    public ResponseEntity<?> getAllByID(Long id) {

        return teamService.getAllByID(id);

    }
    @GetMapping("/all")
    public ResponseEntity<?> getAll() {

        return teamService.getAll();

    }

}
