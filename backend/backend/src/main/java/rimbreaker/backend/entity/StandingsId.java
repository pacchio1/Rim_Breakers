package rimbreaker.backend.entity;

import java.io.Serializable;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
public class StandingsId implements Serializable {

    private Long idLeague;
    private String season;
    private Long teamId;
    
}
