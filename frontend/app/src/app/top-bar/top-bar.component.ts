import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeService } from '../_service/dark-mode.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent {

    constructor(public themeService: ThemeService) {}

    ngOnInit(): void {}

    toggleTheme(): void {
      this.themeService.toggleTheme();
    }

}