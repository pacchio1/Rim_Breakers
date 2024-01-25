import { Component } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";
import { BasketService } from "../_service/basket.service";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../_service/english-mode.service";

@Component ({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    isDarkMode: boolean = false;
    isEnglishMode: boolean = false;
    players: [] = [];
    loggedIn: boolean = false; 
    emailAccount: string | null = '';

    constructor(public themeService: ThemeService, private basketService: BasketService, private route: ActivatedRoute, public languageService: LanguageService) {}

    ngOnInit(): void {
        // this.printPlayer();
        this.emailAccount = localStorage.getItem('emailAccount');
        // console.log(this.emailAccount);

        if(this.emailAccount !== null) {
            this.loggedIn = true;
        }
        // console.log(this.loggedIn);
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    toggleLanguage(): void {
        this.languageService.toggleLanguage();
    }

}