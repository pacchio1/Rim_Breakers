import { Component } from '@angular/core';
import { ThemeService } from '../_service/dark-mode.service';
import { ProfileService } from '../_service/profile.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../_service/localStorage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
    
    nome: string = ''; 
    cognome: string = ''; 
    email: string = '';
    password: string = '';  
    emailAccount: string = ''; 

    constructor(public themeService: ThemeService, private profileService: ProfileService, private router: Router, private localStorageService: LocalStorageService ) {}

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    onSubmit() {
        this.profileService.getNewUser(this.nome, this.cognome, this.email, this.password).subscribe((response: any) => {
            if(response.message === 'success') {
                this.emailAccount = response.email
                localStorage.setItem('emailAccount', this.emailAccount); 
                this.localStorageService.triggerStorageChange();

                alert('Iscrizione effettuata con successo!'); 

                this.router.navigateByUrl("/logged-home"); 
            }
        })
    }
}
