import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeService } from '../_service/dark-mode.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent {

    storedValue: string | null = ''
    parsedValue: boolean = false;

    constructor(public themeService: ThemeService) {}

    ngOnInit(): void {

      // this.storedValue = localStorage.getItem('darkMode')
      // console.log(this.storedValue)
      // if(this.storedValue)
      //   this.parsedValue = JSON.parse(this.storedValue);
      // console.log(this.parsedValue)

      // if(this.parsedValue)
      //   this.themeService.isDarkMode = this.parsedValue;
      //   console.log(this.themeService.isDarkMode)
      this.themeService.themeSettled()
    }

    toggleTheme(): void {
      this.themeService.toggleTheme();
    }

}