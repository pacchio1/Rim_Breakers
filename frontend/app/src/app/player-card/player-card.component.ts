import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { PlayerDetail } from "../_model/player.model";

@Component ({
    selector: 'player-card',
    templateUrl: './player-card.component.html'
})

export class PlayerCardComponent {

    @Input() players: PlayerDetail[] = [];
    @Output() cardClick: EventEmitter<number> = new EventEmitter<number>();

    constructor(public themeService: ThemeService) {}

    ngOnInit(): void {}

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    handleCardClick(playerId: number) {
        this.cardClick.emit(playerId);
    }
}