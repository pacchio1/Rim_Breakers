package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.CountryRepository;

@Service
@RequiredArgsConstructor

public class CountryService {

    private final CountryRepository countryRepository;

    public ResponseEntity<?> getCountry(Long id) {

        try {

            return new ResponseEntity<>(countryRepository.getCountry(id), HttpStatus.OK);

        }
        catch (Exception e) {

            return new ResponseEntity<>("Country not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getFlagAndName() {

        try {

            return new ResponseEntity<>(countryRepository.getFlagAndName(), HttpStatus.OK);

        }
        catch (Exception e) {

            return new ResponseEntity<>("Country's Flag not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

}
