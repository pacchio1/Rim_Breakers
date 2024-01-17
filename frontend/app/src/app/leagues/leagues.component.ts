import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { Leagues } from "../_model/leagues.model";
import { ActivatedRoute, Router } from "@angular/router";
import { SeasonStanding } from "../_model/seasonStanding.model";
import { BasketService } from "../_service/basket.service";
import { League } from "../_model/league.model";

@Component ({
    selector: 'app-leagues',
    templateUrl: './leagues.component.html'
})

export class LeaguesComponent implements OnInit {

    isDarkMode: boolean = false;
    componentSelected: string = 'A'

    leaguesData: any[] = [];
    league!: League;

    constructor(public themeService: ThemeService, private basketService: BasketService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        // this.simulateAPIResponse();
        // this.activatedRoute.data.subscribe(({league}) => {
        //     console.log('x',league)
        //     this.leaguesData = league
        //     this.leaguesData.sort((a, b) => a.position - b.position);
        //     this.leaguesData.forEach((leagueObj: any) => {
        //         console.log(leagueObj.teamId)
        //         this.basketService.getTeam(leagueObj.teamId).subscribe((teamInfo: any) => {
        //             console.log(teamName);
        //             leagueObj.teamName = teamInfo.name;
        //             console.log(teamInfo.name)
        //             leagueObj.teamLogo = teamInfo.logo;
        //             console.log(leagueObj)
        //         })
        //     })
        // });

        this.activatedRoute.data.subscribe(({league}) => {
            this.leaguesData = league
            console.log(this.leaguesData)
        });

        this.printTeamLeague();

    }

    printTeamLeague() {
        const id = this.activatedRoute.snapshot.paramMap.get('id')
        if(id)
            this.basketService.getLeague(parseInt(id)).subscribe((response: any) => {
                console.log(response);
                this.league = response;
                console.log(this.league.name);
                
            })
    }

    passIdTeam(idTeam: number) {
        this.router.navigate(['/team', idTeam])
    }

    showComponent(component: string) {
        this.componentSelected = component;
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
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