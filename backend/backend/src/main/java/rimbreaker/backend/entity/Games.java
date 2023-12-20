package rimbreaker.backend.entity;

import jakarta.persistence.*;
import java.util.Date;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "games")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Games {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_games")
    private Long id_games;

    @ManyToOne
    @JoinColumn(name = "id_league", nullable = false)
    @Column(name = "id_league")
    private Long id_league;

    @Column(name = "date")
    private Date date;

    @Column(name = "status")
    private String status;

    @Column(name = "id_home")
    private Long id_home;

    @Column(name = "score_home")
    private String score_home;

    @Column(name = "id_away")
    private Long id_away;

    @Column(name = "score_away")
    private String score_away;
}
