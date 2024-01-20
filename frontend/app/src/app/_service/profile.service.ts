import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
	 providedIn: 'root',
})

export class ProfileService {

    constructor(private apiService: ApiService) {}

    /**
     * API REGISTRAZIONE UTENTE
     * 
     * @param nome @param cognome @param email @param password
     * @returns richiesta Api 
     */
    getNewUser(nome: string, cognome: string, email: string, password: string) {
        return this.apiService.createNewUser(nome, cognome, email, password); 
    }

    /**
     * API ACCESSO UTENTE
     * 
     * @param
     * @returns richiesta Api 
     */
    getUserLogin(email: string, password: string) {
        return this.apiService.userLogin(email, password);
    }

    /**
     * API ACCESSO UTENTE
     * 
     * @param
     * @returns richiesta Api 
     */
    getUserByEmail(email: string) {
        return this.apiService.searchUserByEmail(email);
    }

    /**
     * API MODIFICA PASSWORD
     * 
     * @param
     * @returns richiesta Api 
     */
    getNewPassword(email: string, password: string) {
        return this.apiService.updateUserPassword(email, password);
    }
}