import { Component, Input } from "@angular/core";
import { Leagues } from "../_model/leagues.model";
import { BasketService } from "../_service/basket.service";
import { SeasonStandingUpdate } from "../_model/seasonStanding.model";
import { Router } from "@angular/router";

@Component ({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html'
})

export class RankingComponent {

    @Input() teamsData: Leagues[] = [];

    teamsStandingData: SeasonStandingUpdate[] = [];

    constructor(private basketService: BasketService, private router: Router) {}

    ngOnInit(): void {

        const teamId = this.teamsData.length > 0 ? this.teamsData[0].id_league : null;
        
        if(teamId) {
            this.basketService.getTeamsLeagueStandings(teamId).subscribe((response: any) => {
                this.teamsStandingData = response
                this.teamsStandingData.sort((a, b) => a.position - b.position);
                console.log(this.teamsStandingData);
                this.teamsStandingData.forEach((leagueObj: any) => {
                    console.log(leagueObj.teamId)
                    this.basketService.getTeam(leagueObj.teamId).subscribe((teamInfo: any) => {
                        leagueObj.teamName = teamInfo.name;
                        leagueObj.teamLogo = teamInfo.logo;
                        console.log(leagueObj)
                    })
                })
            })
        }
        
    }

    passIdTeam(idTeam: number) {
        this.router.navigate(['/team', idTeam])
    }

}