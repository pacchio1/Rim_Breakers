package rimbreaker.backend.entity;

import jakarta.persistence.*;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "games")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Games {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_games")
    private Long id_games;

    @Column(name = "ID_league")
    private Long leagueId;

    @Column(name = "date")
    private Date date;

    @Column(name = "status", columnDefinition = "TEXT")
    private String status;

    @Column(name = "ID_home")
    private Long homeId;

    @Column(name = "score_home", columnDefinition = "TEXT")
    private String scoreHome;

    @Column(name = "ID_away")
    private Long awayId;

    @Column(name = "score_away", columnDefinition = "TEXT")
    private String scoreAway;
}
