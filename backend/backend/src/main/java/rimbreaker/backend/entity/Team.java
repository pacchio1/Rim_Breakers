package rimbreaker.backend.entity;

import jakarta.persistence.*;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "team")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_team")
    private Long id;

    @Column(name = "ID_league")
    private Long leagueId;

    @Column(name = "name")
    private String name;

    @Lob
    @Column(name = "logo")
    private String logo;
}
