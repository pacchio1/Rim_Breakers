import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
	 providedIn: 'root',
})

export class BasketService {

    constructor(private apiService: ApiService) {}

    /**
     * API RICERCA LEAGUES
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    getTeamsLeague(idLeague: number) {
        return this.apiService.searchTeamsLeague(idLeague)
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
     * API RICERCA TEAM
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

}