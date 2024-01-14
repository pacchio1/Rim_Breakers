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
            idLeague: 2,
            nameLeague: 'LNB',
            nameTeam: 'Le Portel',
            logoTeam: 'https://media-4.api-sports.io/basketball/teams/11.png'
        }, {
            idLeague: 2,
            nameLeague: 'LNB',
            nameTeam: 'Chalons-Reims',
            logoTeam: 'https://media-4.api-sports.io/basketball/teams/12.png'
        }, {
            idLeague: 2,
            nameLeague: 'LNB',
            nameTeam: 'Levallois',
            logoTeam: 'https://media-4.api-sports.io/basketball/teams/14.png'
        }]

        this.leaguesData = simulation;
        
    }

}