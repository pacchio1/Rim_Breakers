package rimbreaker.backend.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "players")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Player {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_player")
    private Long idPlayer;

    @Column(name = "season", nullable = false)
    private String season;

    @Column(name = "name", nullable = false, length = 35)
    private String name;

    @Column(name = "surname", nullable = false, length = 40)
    private String surname;

    @Column(name = "weight", nullable = false)
    private int weight;

    @Column(name = "height", nullable = false)
    private int height;

    @Column(name = "ID_country", nullable = false)
    private int idCountry;

    @Column(name = "mesh_number", nullable = false)
    private int meshNumber;

    @Column(name = "age", nullable = false)
    private int age;

    @Column(name = "played_min", nullable = false)
    private int playedMin;

    @Column(name = "point_scored", nullable = false)
    private int pointScored;

    @Column(name = "assist", nullable = false)
    private int assist;

    @Column(name = "ID_team", nullable = false)
    private int idTeam;

    @Column(name = "shots", nullable = false)
    private int shots;

    @Column(name = "shots_2", nullable = false)
    private int shots2;

    @Column(name = "shots_3", nullable = false)
    private int shots3;

    @Column(name = "free_trows", nullable = false)
    private int freeThrows;

    @Column(name = "ball_holding_time", nullable = false)
    private int ballHoldingTime;

    @Column(name = "nationality", nullable = false)
    private String nationality;

}

