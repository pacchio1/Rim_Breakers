import { Component, OnInit } from "@angular/core";
import { Countries } from "../_model/countries.model";
import { ThemeService } from "../_service/dark-mode.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Leagues } from "../_model/leagues.model";

@Component ({
    selector: 'app-countries',
    templateUrl: './countries.component.html'
})

export class CountriesComponent implements OnInit {
    
    isDarkMode: boolean = false;
    countries: Countries[] = [];
    leagues: Leagues[] = []; 

    constructor(public themeService: ThemeService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({allCountries}) => {
            this.countries = allCountries
            console.log(this.countries)
        });
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }
}