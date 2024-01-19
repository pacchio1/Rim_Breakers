import { Component, Input } from "@angular/core";
import { Leagues } from "../_model/leagues.model";
import { BasketService } from "../_service/basket.service";
import { Router } from "@angular/router";

@Component ({
    selector: 'app-assist',
    templateUrl: './assist.component.html'
})

export class AssistComponent {

    @Input() teamsData: Leagues[] = [];
    
    leaderboard: any[] = []

    constructor(private basketService: BasketService, private router: Router) {}

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
            assist: playerDetails.assist,
            logoTeam: logoTeam
        });
    
        // Ordina la classifica in base ai punti segnati in ordine decrescente
        this.leaderboard.sort((a, b) => b.assist - a.assist);
    }

    passIdPlayer(idPlayer: number) {
        this.router.navigate(['/player', idPlayer])
    }

}

