package rimbreaker.backend.payload.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class ResponseTeamsGame {
    private Long idGames;
    private Long leagueId;
    private Timestamp date;
    private String status;
    private String scoreHome;
    private String scoreAway;
    private String teamHome;
    private String teamAway;

}

