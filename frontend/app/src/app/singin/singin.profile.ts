import { Component } from "@angular/core";
import { LoginUser } from "../_model/login.model";
import { Validators } from "@angular/forms";

@Component ({
    selector: 'app-singin',
    templateUrl: './singin.component.html'
})

export class SinginComponent {

    singinData: LoginUser = { email: '', password: '' };;

    email: string = '';
    password: string = '';

    emailValidator = Validators.compose([Validators.required, Validators.email]);
    passwordValidator = Validators.required;

    onSubmit() {
        // Logica per gestire la sottomissione del modulo
        this.singinData.email = this.email;
        this.singinData.password = this.password;
        console.log(this.singinData)
    }

}