import { Component, Input } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { PlayerDetail } from "../_model/player.model";

@Component ({
    selector: 'player-card',
    templateUrl: './player-card.component.html'
})

export class PlayerCardComponent {

    @Input() players: PlayerDetail[] = [];

    constructor(public themeService: ThemeService) {}

    ngOnInit(): void {}

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }
  
    
}