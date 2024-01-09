package rimbreaker.backend.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponsePlayer {

    private Long id;
    private Long idPlayer;
    private String season;
    private String name;
    private String surname;
}