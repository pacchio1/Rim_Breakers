import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
