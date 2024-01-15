import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ThemeService {

  isDarkMode: boolean = false;
  storedValue: string | null = ''
  parsedValue: boolean = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString())
  }

  themeSettled(): boolean {
    this.storedValue = localStorage.getItem('darkMode')
    if(this.storedValue) {
      this.parsedValue = JSON.parse(this.storedValue);

      if(this.parsedValue) {
        this.isDarkMode = this.parsedValue;
      }           
    }
    return this.isDarkMode
  }
}
