import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { Leagues } from "../_model/leagues.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component ({
    selector: 'app-leagues',
    templateUrl: './leagues.component.html'
})

export class LeaguesComponent implements OnInit {

    isDarkMode: boolean = false;
    leaguesData: Leagues[] = [];

    constructor(public themeService: ThemeService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        // this.simulateAPIResponse();
        this.activatedRoute.data.subscribe(({league}) => {
            console.log(league)
            this.leaguesData = league
        });
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    passIdTeam(idTeam: number) {
        this.router.navigate(['/team', idTeam])
    }

    // simulateAPIResponse(): void {
    //     // Assegnazione dei valori della risposta simulata
    //     const simulation: Leagues[] = [{
    //         idLeague: 2,
    //         nameLeague: 'LNB',
    //         nameTeam: 'Le Portel',
    //         logoTeam: 'https://media-4.api-sports.io/basketball/teams/11.png'
    //     }, {
    //         idLeague: 2,
    //         nameLeague: 'LNB',
    //         nameTeam: 'Chalons-Reims',
    //         logoTeam: 'https://media-4.api-sports.io/basketball/teams/12.png'
    //     }, {
    //         idLeague: 2,
    //         nameLeague: 'LNB',
    //         nameTeam: 'Levallois',
    //         logoTeam: 'https://media-4.api-sports.io/basketball/teams/14.png'
    //     }]

    //     this.leaguesData = simulation;
        
    // }

}