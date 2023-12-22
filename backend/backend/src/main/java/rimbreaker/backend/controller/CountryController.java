package rimbreaker.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import rimbreaker.backend.service.CountryService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/country")
public class CountryController {

    private final CountryService countryService;

    @GetMapping("/flag/{id}")
    public ResponseEntity<?> getFlag(String flag) {
        return countryService.getFlag(flag);

    }

    @GetMapping("/name/{id}")
    public ResponseEntity<?> getNameCountry(String name) {
        return countryService.getNameCountry(name);

    }
}

