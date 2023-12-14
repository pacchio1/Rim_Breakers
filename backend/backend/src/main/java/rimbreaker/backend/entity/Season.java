package rimbreaker.backend.entity;

import jakarta.persistence.*;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "season")
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class Season {
    @Id
    @Column(name = "season")
    private String season;
}
