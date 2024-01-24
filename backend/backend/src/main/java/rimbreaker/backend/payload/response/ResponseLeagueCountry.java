package rimbreaker.backend.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseLeagueCountry {

    private Long id_country;
    private Long id_league;
    private String flag;
    private String nameCountry;
    private String logo;
    private String nameLeague;

}
