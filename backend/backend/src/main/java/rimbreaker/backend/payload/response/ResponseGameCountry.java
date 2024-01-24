package rimbreaker.backend.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseGameCountry {

    private Long id_country;
    private Long id_games;
    private String flag;
    private String nameCountry;
    private Long id_league;
    private Timestamp date;
    private String status;
    private String logoHome;
    private String teamHome;
    private String logoAway;
    private String teamAway;
    private Long homeId;
    private String scoreHome;
    private Long awayId;
    private String scoreAway;

}
