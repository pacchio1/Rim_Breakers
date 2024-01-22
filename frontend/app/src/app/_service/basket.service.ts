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
     * API RICERCA ALL LEAGUE
     * 
     * 
     * @returns richiesta Api 
     */
    getAllLeague() {
        return this.apiService.searchAllLeague()
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
     * API RICERCA STANDING LEAGUE
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    getTeamsLeagueStandingsEcception(idLeague: number) {
        return this.apiService.searchTeamsLeagueStandingsEcception(idLeague)
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
     * API RICERCA LEGUES BY COUNTRY
     * 
     * @param idCountry
     * @returns richiesta Api 
     */
    getLeaguesByCountry(idCountry: number) {
        return this.apiService.searchLeaguesByCountry(idCountry); 
    }
    
    /**
     * API RICERCA GAMES BY LEAGUE
     * 
     * @param leagueName
     * @returns richiesta Api 
     */
    getGamesByLeague(leagueName: string) {
        return this.apiService.searchGamesByLeague(leagueName); 
    }
    
    /**
     * API RICERCA GAMES BY TEAM
     * 
     * @param teamName
     * @returns richiesta Api 
     */
    getGamesByTeam(teamName: string) {
        return this.apiService.searchGamesByTeam(teamName); 
    }
    
    /**
     * API RICERCA GAMES
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    getGame(idLeague: number) {
        return this.apiService.searchGame(idLeague); 
    }
}