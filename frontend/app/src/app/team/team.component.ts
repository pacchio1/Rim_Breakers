import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { PlayerDetail } from '../_model/player.model';
import { ActivatedRoute, Router } from "@angular/router";
import { Team } from "../_model/team.model";
import { BasketService } from "../_service/basket.service";
import { SeasonStandingAll } from "../_model/seasonStanding.model";
import { Leagues } from "../_model/leagues.model";

@Component ({
    selector: 'app-team',
    templateUrl: './team.component.html'
})

export class TeamComponent implements OnInit {

    isDarkMode: boolean = false;
    qualified: boolean = false;
    team!: Team;
    teamPlayers: PlayerDetail[] = []
    filteredStandings: SeasonStandingAll[] = []
    championsCheck: Leagues[] = []
    targetTeam: any
    lastMatches: [] = []
    processedMatches: any[] = []

    constructor(public themeService: ThemeService, private basketService: BasketService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({teamDetail, teamPlayers}) => {
            console.log(teamDetail)
            console.log(teamPlayers)
            this.team = teamDetail
            this.teamPlayers = teamPlayers
        });
        
        console.log(this.team.id_league, this.team.name)
        this.printStandingTeam(this.team.id_league, this.team.name)
        this.checkCup(this.team.name)
        this.printLastmatch(this.team.name)

    }

    printStandingTeam(idLeague: number, teamName: string) {

        this.basketService.getTeamsLeagueStandings(idLeague).subscribe((response: any) => {
            console.log('x', response)
            this.filteredStandings = response.filter((team: any) => team.teamName === teamName);
            this.targetTeam = this.filteredStandings.length > 0 ? this.filteredStandings[0] : null;

            console.log('targetTeam', this.targetTeam);
        })

    }

    checkCup(teamName: string) {
        this.basketService.getTeamsLeague(202).subscribe((response: any) => {
            // console.log('Champions', response)
            this.championsCheck = response.filter((team: any) => team.nameTeam === teamName);
            // console.log('championsCheck', this.championsCheck)
            if(this.championsCheck.length > 0)
                this.qualified = true
        })
    }

    printLastmatch(name: string) {
        this.basketService.getGamesByTeam(name).subscribe((response: any) => {
            this.lastMatches = response
            this.processedMatches = this.lastMatches.map(game => this.processGame(game));
            console.log('lastGame', this.processedMatches[0])
        })
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    passIdPlayer(idPlayer: number) {
        this.router.navigate(['/player', idPlayer])
    }
    
    passIdGames(idGames: number) {
        this.router.navigate(['/game', idGames])
    }

    private processGame(game: any): any {
        function parseScore(scoreString: string): (number | null)[] {
            return scoreString.split(',').map(value => (value === 'None' ? null : parseInt(value, 10)));
        }

        const scoreAwayArray = parseScore(game.scoreAway);
        const scoreHomeArray = parseScore(game.scoreHome);

        const processedGame = {
            ...game,
            firstQuarterAway: scoreAwayArray[0],
            secondQuarterAway: scoreAwayArray[1],
            thirdQuarterAway: scoreAwayArray[2],
            fourthQuarterAway: scoreAwayArray[3],
            fifthQuarterAway: scoreAwayArray[4],
            scoreAwayFinal: scoreAwayArray[5],
            scoreAway: scoreAwayArray,
            
            firstQuarterHome: scoreHomeArray[0],
            secondQuarterHome: scoreHomeArray[1],
            thirdQuarterHome: scoreHomeArray[2],
            fourthQuarterHome: scoreHomeArray[3],
            fifthQuarterHome: scoreHomeArray[4],
            scoreHomeFinal: scoreHomeArray[5],
            scoreHome: scoreHomeArray,
        };

        console.log(processedGame);
        
        return processedGame;
    }

}