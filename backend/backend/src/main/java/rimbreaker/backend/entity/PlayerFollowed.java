package rimbreaker.backend.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "playerfollowed")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor


public class PlayerFollowed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_user")
    private Long idUser;

    @Column(name = "ID_player")
    private Long idPlayer;
}
