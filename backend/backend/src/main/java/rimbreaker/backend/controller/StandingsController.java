package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.StandingsService;

@RestController
@RequestMapping("standings")
@RequiredArgsConstructor
public class StandingsController {

    private final StandingsService standingsService;

}
