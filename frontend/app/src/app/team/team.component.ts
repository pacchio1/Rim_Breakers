import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { PlayerDetail } from '../_model/player.model';
import { ActivatedRoute, Router } from "@angular/router";
import { Team } from "../_model/team.model";

@Component ({
    selector: 'app-team',
    templateUrl: './team.component.html'
})

export class TeamComponent implements OnInit {

    isDarkMode: boolean = false;
    team!: Team;
    teamPlayers: PlayerDetail[] = []

    constructor(public themeService: ThemeService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({teamDetail, teamPlayers}) => {
            console.log(teamDetail)
            console.log(teamPlayers)
            this.team = teamDetail
            this.teamPlayers = teamPlayers

        });
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    passIdPlayer(idPlayer: number) {
        this.router.navigate(['/player', idPlayer])
    }

    // passIdTeam(idTeam: number) {
    //     this.router.navigate(['/team', idTeam])
    // }

}