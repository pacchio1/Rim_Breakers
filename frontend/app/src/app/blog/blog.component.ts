import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { ThemeService } from "../_service/dark-mode.service";

@Component ({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})

export class BlogComponent implements OnInit {

    isDarkMode: boolean = false;

    constructor(private basketService: BasketService, public themeService: ThemeService) {}

    ngOnInit(): void {}

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

}