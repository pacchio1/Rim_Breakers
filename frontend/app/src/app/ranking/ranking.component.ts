import { Component, Input } from "@angular/core";
import { Leagues } from "../_model/leagues.model";
import { BasketService } from "../_service/basket.service";
import { SeasonStandingAll, SeasonStandingAllUpdate } from "../_model/seasonStanding.model";
import { Router } from "@angular/router";

@Component ({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html'
})

export class RankingComponent {

    @Input() teamsData: Leagues[] = [];

    teamsStandingData: SeasonStandingAllUpdate[] = [];

    constructor(private basketService: BasketService, private router: Router) {}

    ngOnInit(): void {

        const teamId = this.teamsData.length > 0 ? this.teamsData[0].id_league : null;
        console.log('x',this.teamsData);
        
        if(teamId) {
            this.basketService.getTeamsLeagueStandings(teamId).subscribe((response: any) => {
                this.teamsStandingData = response
                this.teamsStandingData.sort((a, b) => a.standings.position - b.standings.position);
                console.log(this.teamsStandingData)
                this.teamsStandingData.forEach((leagueObj: any) => {
                    console.log(leagueObj)
                    this.basketService.getTeam(leagueObj.standings.teamId).subscribe((teamInfo: any) => {
                        leagueObj.teamLogo = teamInfo.logo;
                    })
                })
            })
        }
        
    }

    passIdTeam(idTeam: number) {
        this.router.navigate(['/team', idTeam])
    }

}