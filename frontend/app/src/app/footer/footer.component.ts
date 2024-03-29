import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';
import { LocalStorageService } from '../_service/localStorage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  loggedIn: boolean = false;

  constructor(public themeService: ThemeService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.themeService.themeSettled();

    if (localStorage.getItem('emailAccount')) {
      this.setLoggedInState();
    }

    // Sottoscrivi all'observable per i cambiamenti nel localStorage
    this.localStorageService.getStorageChangeObservable().subscribe(() => {
      this.setLoggedInState();
    }); 
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  setLoggedInState(): void {
    this.loggedIn = localStorage.getItem('emailAccount') !== null;
    console.log(this.loggedIn);
  }
}
