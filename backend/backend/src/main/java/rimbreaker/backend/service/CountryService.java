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

    public ResponseEntity<?> getFlag() {

        return new ResponseEntity<>(countryRepository.getFlag(), HttpStatus.OK);
    }

    public ResponseEntity<?> getNameCountry() {

        return new ResponseEntity<>(countryRepository.getNameCountry(), HttpStatus.OK);
    }

}
