import { Component, OnInit } from "@angular/core";
import { Countries, CountriesWithLeagues } from "../_model/countries.model";
import { ThemeService } from "../_service/dark-mode.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LeagueByCountry, Leagues } from "../_model/leagues.model";
import { BasketService } from "../_service/basket.service";

@Component ({
    selector: 'app-countries',
    templateUrl: './countries.component.html'
})

export class CountriesComponent implements OnInit {
    
    isDarkMode: boolean = false;
    isDropdownOpen: boolean = false;

    // countries: Countries[] = [];
    leagues: Leagues[] = []; 
    leaguesByCountry: LeagueByCountry[] = [];
    leaguesByCountry2: any[] = [];

    constructor(public themeService: ThemeService, private basketService: BasketService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {

        this.activatedRoute.data.subscribe(({allCountries}) => {
            // this.countries = allCountries
            // console.log(this.countries)
            this.leaguesByCountry2 = allCountries.map((country: CountriesWithLeagues) => {
                console.log(country)
                this.basketService.getTeamsLeagueByCountry(country.id_country).subscribe((response: LeagueByCountry) => {
                  country.leagues = response;
                //   console.log('V', country.leagues)
                });
                return country;
            });
        });

    }

    passIdLeague(idLeague: number) {
        this.router.navigate(['/leagues', idLeague])
    }

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }      

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

}