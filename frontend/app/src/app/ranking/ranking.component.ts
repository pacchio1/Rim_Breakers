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
    @Input() leagueName: string = '';

    teamsStandingData: SeasonStandingAllUpdate[] = [];
    groups: any = {};
    result: any = {};
    groupedTeams: any[] = [];
    teamLogoX: string = '';

    constructor(private basketService: BasketService, private router: Router) {}

    ngOnInit(): void {

        console.log('leagueName', this.leagueName)

        if(this.leagueName === 'Champions Leagu') {
            const teamId = this.teamsData.length > 0 ? this.teamsData[0].id_league : null;
            // console.log('teamsData',this.teamsData);
        
            if(teamId) {
                this.basketService.getTeamsLeagueStandingsEcception(teamId).subscribe((response: any) => {
                    this.teamsStandingData = response
                    console.log('teamsStandingData', response)
                    const sortedData = this.teamsStandingData.sort((a, b) => a.standings.position - b.standings.position);

                    sortedData.forEach(team => {
                      const groupName = team.standings.groupName;

                      this.basketService.getTeam(team.standings.teamId).subscribe((response: any) => {
                        this.teamLogoX = response.logo
                      })
                  
                      if (!this.groups[groupName]) {
                        this.groups[groupName] = {
                          groupName: groupName,
                          teams: []
                        };
                      }
                  
                      const teamInfo = {
                        teamName: team.teamName,
                        position: team.standings.position,
                        teamLogo: this.teamLogoX,
                        // Aggiungi altri campi se necessario
                      };
                  
                      this.groups[groupName].teams.push(teamInfo);
                    });
                  console.log('groups', this.groups)
                    // Trasforma l'oggetto in un array ordinato
                    this.groupedTeams = Object.values(this.groups).sort((a: any, b: any) => {
                        // Ordina in base al nome del gruppo
                        const groupOrder = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F', 'Group G', 'Group H'];
                        return groupOrder.indexOf(a.groupName) - groupOrder.indexOf(b.groupName);
                      });
                })
                    // this.groupedAndSortedData = this.teamsStandingData.reduce((acc: any, obj: any) => {
  
                    //     const key = obj.standings.groupName;
                    
                    //     acc[key] = acc[key] || [];
                    
                    //     acc[key].push(obj);

                    //     acc[key].sort((a: any, b: any) => a.standings.position - b.standings.position);

                    //     return acc;
                    // }, {});
                    // console.log(this.groupedAndSortedData)
                
                
            }
        } else {
            const teamId = this.teamsData.length > 0 ? this.teamsData[0].id_league : null;
            // console.log('teamsData',this.teamsData);
        
            if(teamId) {
                this.basketService.getTeamsLeagueStandings(teamId).subscribe((response: any) => {
                    this.teamsStandingData = response
                    this.teamsStandingData.sort((a, b) => a.standings.position - b.standings.position);
                    // console.log('teamsStandingData', this.teamsStandingData)
                    this.teamsStandingData.forEach((leagueObj: any) => {
                        console.log('leagueObj', leagueObj)
                        this.basketService.getTeam(leagueObj.standings.teamId).subscribe((teamInfo: any) => {
                            leagueObj.teamLogo = teamInfo.logo;
                        })
                    })
                })
            }

        }

    }

    passIdTeam(idTeam: number) {
        this.router.navigate(['/team', idTeam])
    }

}