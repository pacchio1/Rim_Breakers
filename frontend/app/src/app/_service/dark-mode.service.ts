import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode: boolean = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
