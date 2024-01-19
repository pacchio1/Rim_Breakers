package rimbreaker.backend.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "teamfollowed")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor

public class TeamFollowed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_user")
    private Long idUser;
    
    @Column(name = "ID_team")
    private Long idTeam;

}

