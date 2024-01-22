import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { ActivatedRoute } from "@angular/router";
import { League } from "../_model/league.model";

@Component ({
    selector: 'app-teams-prev',
    templateUrl: './teams-preview.component.html'
})

export class TeamsPreviewComponent implements OnInit {

    leagues: League[] = []

    constructor(private basketService: BasketService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({allLeagues}) => {
            this.leagues = allLeagues;
            console.log(this.leagues)
        });
    }

}