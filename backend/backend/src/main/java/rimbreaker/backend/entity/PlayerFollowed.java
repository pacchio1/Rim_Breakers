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



    @Column(name = "ID_user")
    private Long idUser;

    @Id
    @Column(name = "ID_player")
    private Long idPlayer;
    
}
