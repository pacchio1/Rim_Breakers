package rimbreaker.backend.payload.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseCountry {

    private Long id_country;
    private String flag;
    private String name;

}
