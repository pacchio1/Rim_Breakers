package rimbreaker.backend.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseTeamLeague {

    private Long id_league;
    private String nameLeague;
    private String nameTeam;
    private String logoTeam;

}
