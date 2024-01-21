import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { ActivatedRoute } from "@angular/router";
import { Match } from "../_model/match.model";
import { DatePipe } from "@angular/common";
import { faker } from '@faker-js/faker';

@Component ({
    selector: 'app-game-detail',
    templateUrl: './game-detail.component.html',
    providers: [DatePipe]
})

export class GameDetailComponent implements OnInit {

    matchData: any[] = [];
    processedMatches: any[] = [];

    constructor(private basketService: BasketService, private activatedRoute: ActivatedRoute, private datePipe: DatePipe) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({matchDetail}) => {
            console.log('matchDetail', matchDetail)
            this.matchData = matchDetail      
            this.processedMatches = this.matchData.map(game => this.processGame(game));
        });   
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

        processedGame.date = this.datePipe.transform(processedGame.date, 'dd/MM/yyyy') || '';

        console.log('processedGame', processedGame);
        
        return processedGame;
    }

    printStat() {
        
    }

}