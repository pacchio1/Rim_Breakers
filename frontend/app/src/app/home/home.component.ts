import { Component } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";

@Component ({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    isDarkMode: boolean = false;

    constructor(public themeService: ThemeService) {}

    ngOnInit(): void {}

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

}