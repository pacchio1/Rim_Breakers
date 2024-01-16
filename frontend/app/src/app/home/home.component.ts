import { Component } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { BasketService } from "../_service/basket.service";

@Component ({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    isDarkMode: boolean = false;
    players: [] = [];

    constructor(public themeService: ThemeService, private basketService: BasketService) {}

    ngOnInit(): void {
        // this.printPlayer();
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    // printPlayer() {
    //     this.basketService.getPlayer().subscribe((response: any) => {
    //         this.players = response
    //         console.log(this.players);
            
    //     })
    // }

}