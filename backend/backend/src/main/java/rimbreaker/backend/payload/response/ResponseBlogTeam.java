package rimbreaker.backend.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseBlogTeam {

    private Long id_post;
    private Long id_user;
    private Long id;
    private String nameTeam;
    private String text;

}
