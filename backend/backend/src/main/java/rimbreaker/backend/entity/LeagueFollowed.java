package rimbreaker.backend.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "leaguefollowed")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class LeagueFollowed {


    @Column(name = "ID_user")
    private Long idUser;

    @Id
    @Column(name = "id_league")
    private Long idLeague;
    
}
