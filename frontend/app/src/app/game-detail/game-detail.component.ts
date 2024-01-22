import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Match } from "../_model/match.model";
import { DatePipe } from "@angular/common";
import { faker } from '@faker-js/faker';

@Component ({
    selector: 'app-game-detail',
    templateUrl: './game-detail.component.html',
    providers: [DatePipe]
})

export class GameDetailComponent implements OnInit {

    matchData: any = {};
    processedMatches: any = {};
    
    statHome: any = {}
    statAway: any = {}

    fieldGoals2: number = 0;
    maxFieldGoals3: number = 0;
    fieldGoals3: number = 0;
    freeThrows: number = 0;
    shots2: number = 0;
    shots3: number = 0;
    temptedShots2: number = 0;
    temptedShots3: number = 0;
    percentageShots2: number = 0;
    percentageShots3: number = 0;
    bounceTotal: number = 0;
    assistTotal: number = 0;
    fouls: number = 0;
    
    constructor(private basketService: BasketService, private activatedRoute: ActivatedRoute, private datePipe: DatePipe, private router: Router) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({matchDetail}) => {
            console.log('matchDetail', matchDetail)
            this.matchData = matchDetail      
            // this.processedMatches = this.matchData.map(game => this.processGame(game));
            this.processedMatches = this.processGame(this.matchData)
            // console.log(this.processedMatches.scoreHomeFinal, this.processedMatches.scoreAwayFinal)
            this.statHome = this.printStat(this.processedMatches.scoreHomeFinal)
            this.statAway = this.printStat(this.processedMatches.scoreAwayFinal)
            console.log('statHome', this.statHome)
            console.log('statAway', this.statAway)
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

    printStat(maxPoints: number) {
        
        console.log('point', maxPoints)
        
        do {
            this.fieldGoals2 = faker.number.int({ min: maxPoints / 2, max: maxPoints * 0.7 })
        } while (this.fieldGoals2 % 2 !== 0);
        // console.log('fieldGoals2', this.fieldGoals2)
        this.maxFieldGoals3 = Math.floor(maxPoints - this.fieldGoals2);
        // console.log('maxFieldGoals3', this.maxFieldGoals3)
        do {
            this.fieldGoals3 = faker.number.int({ min: 1, max: this.maxFieldGoals3 })
        } while (this.fieldGoals3 % 3 !== 0);
        // console.log('fieldGoals3', this.fieldGoals3)

        this.freeThrows = maxPoints - (this.fieldGoals2 + this.fieldGoals3)
      
        // console.log('maxFreeThrows', this.freeThrows)

        this.shots2 = this.fieldGoals2 / 2;
        this.shots3 = this.fieldGoals3 / 3;
        this.temptedShots2 = faker.number.int({ min: this.shots2, max: this.shots2 * 2 })
        this.temptedShots3 = faker.number.int({ min: this.shots3, max: this.shots3 * 2 })
        this.percentageShots2 = (this.shots2 / this.temptedShots2) * 100
        const roundedPercentage2 = this.percentageShots2.toFixed(2);
        this.percentageShots3 = (this.shots3 / this.temptedShots3) * 100 
        const roundedPercentage3 = this.percentageShots3.toFixed(2);
        this.bounceTotal = faker.number.int({ min: 20, max: 50 })
        this.assistTotal = faker.number.int({ min: (this.shots2 + this.shots3) / 2, max: (this.shots2 + this.shots3) })
        this.fouls = faker.number.int({ min: this.freeThrows / 2, max: this.freeThrows })

        return {
            point2: this.fieldGoals2,
            point3: this.fieldGoals3,
            freeThrowsPoint: this.freeThrows,
            shot2: this.shots2,
            shot3: this.shots3,
            temptedShot2: this.temptedShots2,
            temptedShot3: this.temptedShots3,
            percentageShot2: roundedPercentage2,
            percentageShot3: roundedPercentage3,
            bounce: this.bounceTotal,
            assist: this.assistTotal,
            foul: this.fouls
        };

    }

    passIdTeam(idTeam: number) {
        this.router.navigate(['/team', idTeam])
    }

}