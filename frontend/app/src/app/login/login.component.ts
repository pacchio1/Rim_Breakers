import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';
import { LoginUser } from '../_model/login.model';
import { Router } from '@angular/router';
import { BasketService } from '../_service/basket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  user!: LoginUser; 

  email: string = '';
  password: string = '';

  constructor(public themeService: ThemeService, private router: Router, private basketService: BasketService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onSubmit() {
    this.checkCredentials(); 
  }

  checkCredentials() {
    this.basketService.getUserLogin(this.email).subscribe((response: LoginUser) => {
      console.log(this);
      this.user = response;
    })

    console.log(this);
    

    if(this.email === this.user.email) {
      if(this.password === this.user.password) {
        console.log('Login effettuato con successo');
        this.router.navigate(['/home']); 
      }
      else {
        console.log('Errore');
      } 
    }
    else {
      console.log('Errore');
    }
  }
}