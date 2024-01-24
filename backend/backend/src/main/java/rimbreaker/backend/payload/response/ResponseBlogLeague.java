package rimbreaker.backend.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseBlogLeague {

    private Long id_post;
    private Long id_user;
    private Long id_league;
    private String nameLeague;
    private String text;

}
