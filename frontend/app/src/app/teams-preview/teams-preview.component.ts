import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { ActivatedRoute } from "@angular/router";
import { League } from "../_model/league.model";
import { forkJoin, map } from "rxjs";

@Component ({
    selector: 'app-teams-prev',
    templateUrl: './teams-preview.component.html'
})

export class TeamsPreviewComponent implements OnInit {

    leagues: League[] = []
    teamsByLeague: any = {};
    desiredLeagueIds = [2, 40, 45, 52, 117, 104, 202];

    constructor(private basketService: BasketService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({allLeagues}) => {
            this.leagues = allLeagues;
            console.log(this.leagues)
            const observables = this.desiredLeagueIds.map((leagueId) =>
            this.basketService.getTeamsLeague(leagueId).pipe(
                map((teams: any[]) => {
                // Prendi casualmente tre squadre da ciascuna lega
                const randomTeams = this.getRandomElements(teams, 5);

                // Aggiungi le squadre casuali all'array per la lega corrente
                this.teamsByLeague[leagueId.toString()] = randomTeams;

                return randomTeams;
                })
            ));
            forkJoin(observables).subscribe((responses: any[]) => {
                // Ora 'responses' contiene un array di squadre casuali per ciascuna lega
                console.log(this.teamsByLeague);
            });
        })
    }

    getRandomElements(arr: any[], n: number): any[] {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
      }

}