import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { PlayerDetail } from "../_model/player.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Team } from "../_model/team.model";
import { League } from "../_model/league.model";
import { Match } from "../_model/match.model";

@Component ({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html'
})

export class PlayerDetailComponent implements OnInit {

    singlePlayer!: PlayerDetail
    playerTeam!: Team;
    lastMatch: [] = [];
    league!: League;
    playerLeague: string = '';
    playerTeammates: PlayerDetail[] = []
    processedMatches: any[] = [];

    constructor(private basketService: BasketService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        // this.printSinglePlayer()
        this.activatedRoute.data.subscribe(({playerDetail}) => {
            console.log('playerDetail', playerDetail)
            this.singlePlayer = playerDetail  
            console.log('singlePlayer', this.singlePlayer)    
            this.printPlayerTeammates()      
        });

        console.log('PROVA', this.singlePlayer.idTeam)
        
        this.printPlayerTeam();

    }

    passIdGames(idGames: number) {
        this.router.navigate(['/game', idGames])
    }

    printPlayerTeam() {
        // if(this.singlePlayer && this.singlePlayer.idTeam) {
        this.basketService.getTeam(this.singlePlayer.idTeam).subscribe((response: Team) => {
            this.playerTeam = response;
            console.log('playerTeam', this.playerTeam)
            // this.printPlayerLeague();
            this.printLeague();
            this.printLastGame(this.playerTeam.name)
        })
        
        // }   
    }

    printLeague() {
        this.basketService.getLeague(this.playerTeam.id_league).subscribe((response: League) => {
            this.league = response
            console.log('league', this.league)
        })
    }

    printLastGame(teamName: string) {
        this.basketService.getGamesByTeam(teamName).subscribe((response: any) => {
            this.lastMatch = response
            this.processedMatches = this.lastMatch.map(game => this.processGame(game));
            console.log('lastGame', this.processedMatches[0])
        })
    }

    // printPlayerLeague() {
    //     this.basketService.getLeague(this.playerTeam.id_league).subscribe((response: any) => {
    //         this.playerLeague = response[1]
    //         console.log('playerLeague', this.playerLeague)
    //         this.printPlayerTeammates()
    //     })
    // }

    printPlayerTeammates() {
        this.basketService.getTeamPlayers(this.singlePlayer.idTeam).subscribe((response: PlayerDetail[]) => {
            this.playerTeammates = response
            this.playerTeammates = this.playerTeammates.filter(player => {
                return player.idPlayer !== this.singlePlayer.idPlayer
            })
            console.log('printPlayerTeammates',this.playerTeammates)
        })
    }

    passIdPlayer(idPlayer: number) {
        this.router.navigate(['/player', idPlayer])
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

    // printSinglePlayer() {
    //     this.basketService.getSinglePlayer().subscribe((response: any) => {
    //         this.singlePlayer = response
    //         console.log(this.singlePlayer)
    //     })
    // }

}