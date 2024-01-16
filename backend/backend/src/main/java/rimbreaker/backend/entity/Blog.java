package rimbreaker.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "blog")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_blog")
    private Long id_blog;

    @Column(name = "ID_user")
    private Long id_user;

    @Column(name = "ID_country")
    private Long id_country;

    @Column(name = "ID_league")
    private Long id_league;

    @Column(name = "ID_team")
    private Long id_team;

    @Column(name = "text")
    private String text;

}
