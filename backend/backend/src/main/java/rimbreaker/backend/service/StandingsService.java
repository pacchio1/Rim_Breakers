package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.StandingsRepository;

@Service
@RequiredArgsConstructor
public class StandingsService {

    private final StandingsRepository standingsRepository;

}
