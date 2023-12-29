package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Country;
import rimbreaker.backend.payload.response.ResponseCountry;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, Integer> {

    @Query("SELECT c.flag, c.name FROM Country c WHERE c.id_country = :id")
    List<String> getCountry(Long id);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseCountry(" +
            "c.id_country, " +
            "c.flag, " +
            "c.name" +
            ") FROM Country c")
    List<ResponseCountry> getFlagAndName();

    /*

    @Query("SELECT  FROM Country")
    List<String> getNameCountry();

    */

}
