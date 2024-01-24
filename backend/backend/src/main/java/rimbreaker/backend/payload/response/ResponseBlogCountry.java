package rimbreaker.backend.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseBlogCountry {

    private Long id_post;
    private Long id_user;
    private Long id_country;
    private String nameCountry;
    private String text;

}
