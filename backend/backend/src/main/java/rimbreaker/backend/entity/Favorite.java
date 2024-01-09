package rimbreaker.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_user")
    private Long idUser;

    @Column(name = "id_country")
    private Long idCountry;

    @Column(name = "ID_league")
    private Long idLeague;

    @Column(name = "ID_player")
    private Long idPlayer;
}
