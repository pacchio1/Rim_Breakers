package rimbreaker.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import rimbreaker.backend.service.CountryService;

@RestController
@RequestMapping("country")
@RequiredArgsConstructor
public class CountryController {

    private final CountryService countryService;

    @GetMapping("/flag")
    public ResponseEntity<?> getFlag() {

        return countryService.getFlag();

    }

    @GetMapping("/name_country")
    public ResponseEntity<?> getNameCountry() {

        return countryService.getNameCountry();

    }

}

