import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
	 providedIn: 'root',
})

export class BasketService {

    constructor(private apiService: ApiService) {}

    /**
     * API RICERCA LEAGUE
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    getLeague(idLeague: number) {
        return this.apiService.searchLeague(idLeague)
    }
    
    /**
     * API RICERCA STANDING LEAGUE
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    getTeamsLeagueStandings(idLeague: number) {
        return this.apiService.searchTeamsLeagueStandings(idLeague)
    }

    /**
     * API RICERCA TEAM LEAGUES
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    getTeamsLeague(idLeague: number) {
        return this.apiService.searchTeamsLeague(idLeague)
    }

    /**
     * API RICERCA LEAGUES PER COUNTRY
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    getTeamsLeagueByCountry(idLeague: number) {
        return this.apiService.searchTeamsLeagueByCountry(idLeague)
    }

    /**
     * API RICERCA TEAM
     * 
     * @param idTeam
     * @returns richiesta Api 
     */
    getTeam(idTeam: number) {
        return this.apiService.searchTeam(idTeam)
    }
    
    /**
     * API RICERCA TEAM PLAYERS
     * 
     * @param idTeam
     * @returns richiesta Api 
     */
    getTeamPlayers(idTeam: number) {
        return this.apiService.searchTeamPlayers(idTeam)
    }

    /**
     * API RICERCA PLAYER
     * 
     * @param idPlayer
     * @returns richiesta Api 
     */
    getSinglePlayer(idPlayer: number) {
        return this.apiService.searchSinglePlayer(idPlayer)
    }

    /**
     * API RICERCA COUNTRY
     * 
     * 
     * @returns richiesta Api 
     */
    getAllCountries() {
        return this.apiService.searchAllCountry()
    }

    /**
     * API RICERCA PLAYER
     * 
     * @param idCountry
     * @returns richiesta Api 
     */
    getLeaguesByCountry(idCountry: number) {
        return this.apiService.searchLeaguesByCountry(idCountry); 
    }

    /**
     * API REGISTRAZIONE UTENTE
     * 
     * @param nome @param cognome @param email @param password
     * @returns richiesta Api 
     */
    getNewUser(nome: string, cognome: string, email: string, password: string) {
        return this.apiService.searchNewUser(nome, cognome, email, password); 
    }

    /**
     * API ACCESSO UTENTE
     * 
     * @param
     * @returns richiesta Api 
     */
    getUserLogin(email: string) {
        console.log(email);
        return this.apiService.searchUserLogin(email);
    }
}