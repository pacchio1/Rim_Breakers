import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
