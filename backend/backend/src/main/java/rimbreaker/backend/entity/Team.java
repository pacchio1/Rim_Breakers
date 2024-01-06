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
    private Long id_league;

    @Column(name = "ID_country")
    private  Long id_country;
    
    @Column(name = "name")
    private String name;

    @Column(name = "logo", columnDefinition = "TEXT")
    private String logo;
}
