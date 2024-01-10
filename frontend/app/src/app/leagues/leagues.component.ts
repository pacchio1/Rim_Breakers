import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { Leagues } from "../_model/leagues.model";

@Component ({
    selector: 'app-leagues',
    templateUrl: './leagues.component.html'
})

export class LeaguesComponent implements OnInit {

    isDarkMode: boolean = false;
    leaguesData: Leagues[] = [];

    constructor(public themeService: ThemeService) {}

    ngOnInit(): void {
        this.simulateAPIResponse();
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    simulateAPIResponse(): void {
        // Assegnazione dei valori della risposta simulata
        const simulation: Leagues[] = [{
            nomeLega: 'LNB',
            urlImg: 'https://media-4.api-sports.io/basketball/leagues/2.png'
        }, {
            nomeLega: 'BBL',
            urlImg: 'https://media-4.api-sports.io/basketball/leagues/40.png'
        }, {
            nomeLega: 'Basket League',
            urlImg: 'https://media-4.api-sports.io/basketball/leagues/45.png'
        }]

        this.leaguesData = simulation;
      }

}