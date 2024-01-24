import { Component, Input } from "@angular/core";
import { Leagues } from "../_model/leagues.model";
import { BasketService } from "../_service/basket.service";
import { Router } from "@angular/router";
import { ThemeService } from "../_service/dark-mode.service";

@Component ({
    selector: 'app-scorer',
    templateUrl: './scorer.component.html'
})

export class ScorerComponent {

    @Input() teamsData: Leagues[] = [];
    
    leaderboard: any[] = []

    constructor(private basketService: BasketService, private router: Router, public themeService: ThemeService) {}

    ngOnInit(): void {
        this.teamsData.forEach(team => {
            this.printTeamPlayers(team.id, team.logoTeam)
            // console.log(this.leaderboard)
        })
    }

    printTeamPlayers(idTeam: number, logoTeam: string) {
        this.basketService.getTeamPlayers(idTeam).subscribe((players: any) => {
            // console.log('getTeamPlayers', players)
            players.forEach((player: any) => {
                // console.log('playerDetails', player)
                this.basketService.getSinglePlayer(player.idPlayer).subscribe((playerDetails: any) => {
                    // console.log('playerInfo', response);
                    this.addToLeaderboard(playerDetails, logoTeam);
                })
            })
        })
    }

    addToLeaderboard(playerDetails: any, logoTeam: string) {
        this.leaderboard.push({
            idPlayer: playerDetails.idPlayer,
            name: playerDetails.name,
            surname: playerDetails.surname,
            pointsScored: playerDetails.pointScored,
            logoTeam: logoTeam
        });
    
        // Ordina la classifica in base ai punti segnati in ordine decrescente
        this.leaderboard.sort((a, b) => b.pointsScored - a.pointsScored);
    }

    passIdPlayer(idPlayer: number) {
        this.router.navigate(['/player', idPlayer])
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

}

