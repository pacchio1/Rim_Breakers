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
    getNewPassword(password: string, idUser: number) {
        return this.apiService.updateUserPassword(password, idUser);
    }

    /**
     * API ELIMINA ACCOUNT
     * 
     * @param
     * @returns richiesta Api 
     */
    getDeleteUser(idUser: number) {
        return this.apiService.deleteUser(idUser);
    }

    /**
     * API LEGA PREFERITA
     * 
     * @param
     * @returns richiesta Api 
     */
    getFavouriteLeague(idUser: number, idLeague: number) {
        return this.apiService.searchFavouriteLeague(idUser, idLeague);
    }

    /**
     * API LEGA PREFERITA
     * 
     * @param
     * @returns richiesta Api 
     */
    getAllFavouriteLeagues(idUser: number) {
        return this.apiService.searchAllFavouriteLeagues(idUser);
    }

    /**
     * API LEGA PREFERITA
     * 
     * @param
     * @returns richiesta Api 
     */
    getNotFavouriteLeague(idUser: number, idLeague: number) {
        return this.apiService.searchNotFavouriteLeague(idUser, idLeague);
    }

    /**
     * API LEGA PREFERITA
     * 
     * @param
     * @returns richiesta Api 
     */
    getFavouriteTeam(idUser: number, idTeam: number) {
        return this.apiService.searchFavouriteTeam(idUser, idTeam);
    }

    /**
     * API LEGA PREFERITA
     * 
     * @param
     * @returns richiesta Api 
     */
    getAllFavouriteTeams(idUser: number) {
        return this.apiService.searchAllFavouriteTeams(idUser);
    }

    /**
     * API LEGA PREFERITA
     * 
     * @param
     * @returns richiesta Api 
     */
    getNotFavouriteTeam(idUser: number, idTeam: number) {
        return this.apiService.searchNotFavouriteTeam(idUser, idTeam);
    }

    /**
     * API LEGA PREFERITA
     * 
     * @param
     * @returns richiesta Api 
     */
    getFavouritePlayer(idUser: number, idPlayer: number) {
        return this.apiService.searchFavouritePlayer(idUser, idPlayer);
    }

    /**
     * API LEGA PREFERITA
     * 
     * @param
     * @returns richiesta Api 
     */
    getAllFavouritePlayers(idUser: number) {
        return this.apiService.searchAllFavouritePlayers(idUser);
    }

    /**
     * API LEGA PREFERITA
     * 
     * @param
     * @returns richiesta Api 
     */
    getNotFavouritePlayer(idUser: number, idPlayer: number) {
        return this.apiService.searchNotFavouritePlayer(idUser, idPlayer);
    }
}