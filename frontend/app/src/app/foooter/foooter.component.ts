import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';

@Component({
  selector: 'app-foooter',
  templateUrl: './foooter.component.html',
})
export class FoooterComponent {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
