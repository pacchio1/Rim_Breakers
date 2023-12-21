package rimbreaker.backend.entity;

import jakarta.persistence.*;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "standings")
@IdClass(StandingsId.class)
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Standings {
    @Id
    @Column(name = "ID_league")
    private Long leagueId;

    @Id
    @Column(name = "season")
    private String season;

    @Id
    @Column(name = "ID_team")
    private Long teamId;

    @Column(name = "position")
    private int position;

    @Column(name = "group_name")
    private String groupName;

    @Column(name = "played")
    private int played;

    @Column(name = "win")
    private int win;

    @Column(name = "perc_win")
    private float percWin;

    @Column(name = "lose")
    private int lose;

    @Column(name = "perc_lose")
    private float percLose;

    @Column(name = "points_for")
    private int pointsFor;

    @Column(name = "points_against")
    private int pointsAgainst;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;
}
