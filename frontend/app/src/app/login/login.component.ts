import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';
import { BasketService } from '../_service/basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(public themeService: ThemeService, private basketService: BasketService, private router: Router) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onSubmit() {
    this.checkCredentials(); 
  }

  checkCredentials() {
    this.basketService.getUserLogin(this.email, this.password).subscribe((response: any) => {
      console.log(response);
    })
  }
}