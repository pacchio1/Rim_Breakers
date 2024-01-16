package rimbreaker.backend.payload.response;

import lombok.*;

import java.sql.Timestamp;

/*@Data
@Builder*/

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class ResponseGame {

    private Long idGames;
    private Long leagueId;
    private Timestamp date;
    private String status;
    private Long homeId;
    private String scoreHome;
    private Long awayId;
    private String scoreAway;
    private String teamHome;
    private String teamAway;

}

