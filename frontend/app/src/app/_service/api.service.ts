import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PlayerDetail } from '../_model/player.model';
import { Leagues } from '../_model/leagues.model';
import { Team } from '../_model/team.model';

// import { SunsetResults } from '../model/sunset.model';

@Injectable({
	 providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}

    /**
     * API RICERCA LEAGUE
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    searchLeague(idLeague: number) {
        return this.http.get('http://localhost:8080/league/number?id=' + idLeague).pipe(map((response: any) => {
            return response
        }))
    }

    /**
     * API RICERCA LEAGUES
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    searchTeamsLeague(idLeague: number) {
        return this.http.get('http://localhost:8080/league/team_league?id=' + idLeague).pipe(map((response: any) => {
            return response as Leagues[]
        }))
    }

    /**
     * API RICERCA TEAM
     * 
     * @param idTeam 
     * @returns richiesta Api 
     */
    searchTeam(idTeam: number) {
        return this.http.get('http://localhost:8080/team/all_by_id?id=' + idTeam).pipe(map((response: any) => {
            return response as Team
        }))
    }
    
    /**
     * API RICERCA TEAM
     * 
     * @param idTeam 
     * @returns richiesta Api 
     */
    searchTeamPlayers(idTeam: number) {
        return this.http.get('http://localhost:8080/player/team?id_team=' + idTeam).pipe(map((response: any) => {
            return response as PlayerDetail[]
        }))
    }

    /**
     * API RICERCA PLAYER
     * 
     * @param idPlayer
     * @returns richiesta Api 
     */
    searchSinglePlayer(idPlayer: number) {
        return this.http.get('http://localhost:8080/player/number?id=' + idPlayer).pipe(map((response: any) => {
            return response as PlayerDetail
        }))
    }


}