import { Component } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";

@Component ({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {

    constructor(public themeService: ThemeService) {}

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

}