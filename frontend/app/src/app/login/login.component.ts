import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';
import { Router } from '@angular/router';
import { ProfileService } from '../_service/profile.service';
import { LocalStorageService } from '../_service/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  email: string = '';
  password: string = '';
  emailAccount: string = ''; 

  constructor(public themeService: ThemeService, private profileService: ProfileService, private router: Router, private localStorageService: LocalStorageService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onSubmit() {
    this.checkCredentials(); 
  }

  checkCredentials() {
    this.profileService.getUserLogin(this.email, this.password).subscribe((response: any) => {
      
      if(response.message === 'success') {
        this.emailAccount = response.email
        localStorage.setItem('emailAccount', this.emailAccount); 
        this.localStorageService.triggerStorageChange();

        alert('Login effettuato con successo!')

        this.router.navigateByUrl("/logged-home");
      }
    })
  }
}