package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.TeamRepository;

@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepository teamRepository;

    public ResponseEntity<?> getTeamName(int id) {

        return new ResponseEntity<>(teamRepository.getTeamName((long) id), HttpStatus.OK);

    }

    public ResponseEntity<?> getTeamLogo(int id) {

        return new ResponseEntity<>(teamRepository.getTeamLogo((long) id), HttpStatus.OK);

    }
}
