import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../_service/basket.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
    
    nome: string = ''; 
    cognome: string = ''; 
    email: string = '';
    password: string = '';  

    constructor(private basketService: BasketService, private router: Router) {}

    onSubmit() {
        this.basketService.getNewUser(this.nome, this.cognome, this.email, this.password)
        .subscribe(
            (response) => {
                console.log('Chiamata riuscita:', response);
                this.router.navigate(['/home']);
            },
            (error) => {
                console.error('Errore nella chiamata:', error);
            }
        );
    }
}
