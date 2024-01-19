package rimbreaker.backend.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import rimbreaker.backend.entity.Standings;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseStandingsTeam {

    private Standings standings;
    private String teamName;

}
