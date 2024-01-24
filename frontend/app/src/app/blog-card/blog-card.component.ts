import { Component, Input } from "@angular/core";
import { ThemeService } from "../_service/dark-mode.service";

@Component ({
    selector: 'blog-card',
    templateUrl: './blog-card.component.html'
})

export class BlogCardComponent {

    @Input() imageUrl: string = '';
    @Input() topic: string = '';
    @Input() date: string = '';

    constructor(public themeService: ThemeService) {}

    ngOnInit(): void {}

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }
  
    
}