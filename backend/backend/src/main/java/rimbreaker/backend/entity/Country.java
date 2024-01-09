package rimbreaker.backend.entity;

import jakarta.persistence.*;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "country")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_country")
    private Long id_country;

    @Column(name = "ID_league")
    private Long id_league;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "code")
    private String code;

    @Column(name = "flag")
    private String flag;
}
