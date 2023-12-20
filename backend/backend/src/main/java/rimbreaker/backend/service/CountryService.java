package rimbreaker.backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.CountryRepository;

@Service

public class CountryService {
    @Autowired
    private CountryRepository countryRepository;
@RequiredArgsConstructor
public class CountryService {

    private final CountryRepository countryRepository;

    public ResponseEntity<?> getFlag(String flag) {

        if (flag == null) {

            return new ResponseEntity<>(countryRepository.getFlag(null), HttpStatus.BAD_REQUEST);

        }

        return new ResponseEntity<>(countryRepository.getFlag(flag), HttpStatus.OK);
    }

    public ResponseEntity<?> getNameCountry(String name) {

        if (name == null) {

            return new ResponseEntity<>(countryRepository.getNameCountry(null), HttpStatus.BAD_REQUEST);

        }

        return new ResponseEntity<>(countryRepository.getNameCountry(name), HttpStatus.OK);
    }
}
