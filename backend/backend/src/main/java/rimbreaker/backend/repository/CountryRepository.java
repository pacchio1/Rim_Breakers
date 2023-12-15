package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import rimbreaker.backend.entity.Country;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, Integer> {
    @Query("SELECT flag FROM Country")
    List<String> getFlag();

    @Query("SELECT name FROM Country")
    List<String> getNameCountry();

    Country save(Country country);
}
