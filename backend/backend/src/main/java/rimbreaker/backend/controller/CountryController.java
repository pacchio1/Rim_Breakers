package rimbreaker.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import rimbreaker.backend.service.CountryService;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/country")
public class CountryController {

    private final CountryService countryService;

    //ritorna paese attraverso id --> dettagli country
    @GetMapping("/number")
    public ResponseEntity<?> getCountry(Long id) {

        return countryService.getCountry(id);

    }

    //ritorna tutta la tabella --> dashboard country
    @GetMapping("/all")
    public ResponseEntity<?> getFlagAndName() {

        return countryService.getFlagAndName();

    }

}

