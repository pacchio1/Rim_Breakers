import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
  
}
