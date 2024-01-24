import { Component, Input } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { Router } from "@angular/router";
import { ThemeService } from "../_service/dark-mode.service";

@Component ({
    selector: 'app-league-match',
    templateUrl: './league-match.component.html'
})

export class LeagueMatchComponent {

    @Input() leagueName: string = '';

    gamesByLeague: any[] = [];
    processedMatches: any[] = [];

    constructor(private basketService: BasketService, private router: Router, public themeService: ThemeService) {}

    ngOnInit(): void {
        if(this.leagueName !== '') {
            this.basketService.getGamesByLeague(this.leagueName).subscribe((response: any[]) => {
                console.log('gamesByLeague', response);
                this.gamesByLeague = response
                this.processedMatches = this.gamesByLeague.map(game => this.processGame(game));
                // this.processedMatches.forEach(game => {
                //     console.log('Score Home Final:', game.scoreHomeFinal);
                //     console.log('Score Away Final:', game.scoreAwayFinal);
                // });
            })
        }
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

        console.log(processedGame);
        
        return processedGame;
    }
}