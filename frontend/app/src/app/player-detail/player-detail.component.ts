import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { PlayerDetail } from "../_model/player.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Team } from "../_model/team.model";
import { League } from "../_model/league.model";

@Component ({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html'
})

export class PlayerDetailComponent implements OnInit {

    singlePlayer!: PlayerDetail
    playerTeam!: Team;
    league!: League;
    playerLeague: string = '';
    playerTeammates: PlayerDetail[] = []

    constructor(private basketService: BasketService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        // this.printSinglePlayer()
        this.activatedRoute.data.subscribe(({playerDetail}) => {
            console.log(playerDetail)
            this.singlePlayer = playerDetail            
        });
        
        this.printPlayerTeam();

    }

    printPlayerTeam() {
        // if(this.singlePlayer && this.singlePlayer.idTeam) {
        this.basketService.getTeam(this.singlePlayer.idTeam).subscribe((response: Team) => {
            this.playerTeam = response;
            console.log('v', this.playerTeam)
            this.printPlayerLeague();
            this.printLeague();
        })
        
        // }   
    }

    printLeague() {
        this.basketService.getLeague(this.playerTeam.id_league).subscribe((response: League) => {
            this.league = response
            console.log('vv', this.league)
        })
    }

    printPlayerLeague() {
        this.basketService.getLeague(this.playerTeam.id_league).subscribe((response: any) => {
            this.playerLeague = response[1]
            console.log(this.playerLeague)
            this.printPlayerTeammates()
        })
    }

    printPlayerTeammates() {
        this.basketService.getTeamPlayers(this.singlePlayer.idTeam).subscribe((response: PlayerDetail[]) => {
            this.playerTeammates = response
            this.playerTeammates = this.playerTeammates.filter(player => {
                return player.idPlayer !== this.singlePlayer.idPlayer
            })
            console.log(this.playerTeammates)
        })
    }

    passIdPlayer(idPlayer: number) {
        this.router.navigate(['/player', idPlayer])
    }

    // printSinglePlayer() {
    //     this.basketService.getSinglePlayer().subscribe((response: any) => {
    //         this.singlePlayer = response
    //         console.log(this.singlePlayer)
    //     })
    // }

}