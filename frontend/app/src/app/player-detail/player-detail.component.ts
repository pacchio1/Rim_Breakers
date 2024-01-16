import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { PlayerDetail } from "../_model/player.model";
import { ActivatedRoute } from "@angular/router";

@Component ({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html'
})

export class PlayerDetailComponent implements OnInit {

    singlePlayer!: PlayerDetail

    constructor(private basketService: BasketService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        // this.printSinglePlayer()
        this.activatedRoute.data.subscribe(({playerDetail}) => {
            console.log(playerDetail)
            this.singlePlayer = playerDetail
        });
    }

    // printSinglePlayer() {
    //     this.basketService.getSinglePlayer().subscribe((response: any) => {
    //         this.singlePlayer = response
    //         console.log(this.singlePlayer)
    //     })
    // }

}