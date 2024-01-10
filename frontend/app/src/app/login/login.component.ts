import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';
import { LoginUser } from '../_model/login.model';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  loginData!: LoginUser;

  email: string = '';
  password: string = '';

  constructor(public themeService: ThemeService, private router: Router) {}

  ngOnInit(): void {
    this.simulateAPIResponseLogin();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  simulateAPIResponseLogin(): void {
    // Assegnazione dei valori della risposta simulata
    const simulationLogin: LoginUser = {
      email: 'giulia@gmail.com',
      password: '1234'
    }
    this.loginData = simulationLogin;
    console.log(this.loginData.password)
  }

  onSubmit() {
    // Logica per gestire la sottomissione del modulo
    this.checkCredentials();
  }

  checkCredentials() {
    // Logica per verificare le credenziali
    // Ad esempio, controlla se le credenziali esistono in un oggetto predefinito
    const users = [
      { email: 'giulia@gmail.com', password: '1234' },
      // Aggiungi altri utenti se necessario
    ];

    const foundUser = users.find(user => user.email === this.email && user.password === this.password);

    if (foundUser) {
      console.log('Credenziali corrette');
      this.router.navigate(['/profile']);
    } else {
      console.error('Credenziali errate');
    }
  }

}
