import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';
import { LocalStorageService } from '../_service/localStorage.service';
import { LanguageService } from '../_service/english-mode.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html'
})

export class TopBarComponent implements OnInit {
  storedValue: string | null = '';
  parsedValue: boolean = false;
  loggedIn: boolean = false;

  constructor(public themeService: ThemeService, private localStorageService: LocalStorageService, public languageService: LanguageService) {}

  ngOnInit(): void {
    this.themeService.themeSettled();
    this.languageService.themeSettled();

    if (localStorage.getItem('emailAccount')) {
      this.setLoggedInState();
    }

    this.localStorageService.getStorageChangeObservable().subscribe(() => {
      this.setLoggedInState();
    });
  }

  setLoggedInState(): void {
    this.loggedIn = localStorage.getItem('emailAccount') !== null;
    console.log(this.loggedIn);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
}
}
