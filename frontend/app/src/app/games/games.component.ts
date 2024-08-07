import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { ActivatedRoute, Router } from "@angular/router";
import { League } from "../_model/league.model";
import { ThemeService } from "../_service/dark-mode.service";

@Component ({
    selector: 'app-games',
    templateUrl: './games.component.html'
})

export class GamesComponent implements OnInit {

    leagues: any[] = [];
    leagues2: any[] = [];
    processedMatches: any[] = [];
    desiredLeagueName = ['LNB', 'BBL', 'Basket League', 'Lega A', 'ACB', 'Super Ligi', 'Champions Leagu'];

    constructor(private basketService: BasketService, private activatedRoute: ActivatedRoute, private router: Router, public themeService: ThemeService) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({allLeagues}) => {
            this.leagues = allLeagues;
            // console.log('gamesByLeague', this.leagues)
            this.desiredLeagueName.forEach(league => {
                this.basketService.getGamesByLeague(league).subscribe((response: any) => {
                    const processedLeagueMatches = response.map((game: any) => this.processGame(game));
                    this.processedMatches.push(...processedLeagueMatches);
                    // console.log('processedMatches', this.processedMatches);
                });
            });
        });
    }

    getProcessedMatchesByLeague(leagueName: string): any[] {
        return this.processedMatches.filter(game => game.nameLeague === leagueName);
    }

    passIdGames(idGames: number) {
        this.router.navigate(['/game', idGames])
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
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

        // console.log(processedGame);
        
        return processedGame;
    }

}