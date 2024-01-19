import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../_service/basket.service';
import { ThemeService } from '../_service/dark-mode.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
    
    nome: string = ''; 
    cognome: string = ''; 
    email: string = '';
    password: string = '';  

    constructor(public themeService: ThemeService, private basketService: BasketService, private router: Router) {}

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    onSubmit() {
        this.basketService.getNewUser(this.nome, this.cognome, this.email, this.password).subscribe((response: any) => {
            console.log(response);
        })
    }
}
