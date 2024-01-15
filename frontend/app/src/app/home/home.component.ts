import { Component } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { BasketService } from "../_service/basket.service";

@Component ({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    playerDetails: [] = []; 
    isDarkMode: boolean = false;

    constructor(public themeService: ThemeService, private basketService: BasketService) {}

    ngOnInit(): void {
        this.printPlayers(); 
    }

    printPlayers() {
        this.basketService.getCountry().subscribe((response: any) => {
            this.playerDetails = response;
            console.log(this.playerDetails);
        })
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }
}