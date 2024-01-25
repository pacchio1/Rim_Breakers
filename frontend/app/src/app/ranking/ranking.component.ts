import { Component, Input } from "@angular/core";
import { Leagues } from "../_model/leagues.model";
import { BasketService } from "../_service/basket.service";
import { SeasonStandingAll, SeasonStandingAllUpdate } from "../_model/seasonStanding.model";
import { Router } from "@angular/router";
import { ThemeService } from "../_service/dark-mode.service";

@Component ({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html'
})

export class RankingComponent {

    @Input() teamsData: Leagues[] = [];
    @Input() leagueName: string = '';

    teamsStandingData: SeasonStandingAll[] = [];
    firstHalf: SeasonStandingAll[] = [];
    secondHalf: SeasonStandingAll[] = [];
    groups: any = {};
    result: any = {};
    groupedTeams: any[] = [];
    teamLogoX: string = '';

    constructor(private basketService: BasketService, private router: Router, public themeService: ThemeService) {}

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
                      teamLogo: team.logo
                    };
                
                    this.groups[groupName].teams.push(teamInfo);
                  });
                  console.log('groups', this.groups)
                  // Trasforma l'oggetto in un array ordinato
                  this.groupedTeams = Object.values(this.groups).sort((a: any, b: any) => {

                    const groupOrder = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F', 'Group G', 'Group H'];
                      return groupOrder.indexOf(a.groupName) - groupOrder.indexOf(b.groupName);
                  });
                })
                    // console.log(this.groupedAndSortedData)
                
                
            }
        } else {
            const teamId = this.teamsData.length > 0 ? this.teamsData[0].id_league : null;
            // console.log('teamsData',this.teamsData);
        
            if(teamId) {
                this.basketService.getTeamsLeagueStandings(teamId).subscribe((response: any) => {
                    this.teamsStandingData = response
                    this.teamsStandingData.sort((a, b) => a.standings.position - b.standings.position);
                    console.log('teamsStandingData', this.teamsStandingData)
                    const middleIndex = Math.ceil(this.teamsStandingData.length / 2)

                    this.firstHalf = this.teamsStandingData.slice(0, middleIndex)
                    console.log('firstHalf', this.firstHalf)
                    this.secondHalf = this.teamsStandingData.slice(middleIndex)
                    console.log('secondHalf', this.secondHalf)
                })
            }

        }

    }

    passIdTeam(idTeam: number) {
        this.router.navigate(['/team', idTeam])
    }

    toggleTheme(): void {
      this.themeService.toggleTheme();
  }

}