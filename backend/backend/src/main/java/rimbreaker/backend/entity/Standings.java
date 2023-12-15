package rimbreaker.backend.entity;

import jakarta.persistence.*;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "standings")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Standings {
    @Id
    @Column(name = "id_league")
    private Long leagueId;

    @Id
    @Column(name = "id_season")
    private Long seasonId;

    @Column(name = "played")
    private Long played;

    @Column(name = "win")
    private String win;

    @Column(name = "lose")
    private String lose;

    @Column(name = "points")
    private String points;
}
