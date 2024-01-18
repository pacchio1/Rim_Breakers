import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PlayerDetail } from '../_model/player.model';
import { LeagueByCountry, Leagues } from '../_model/leagues.model';
import { Team } from '../_model/team.model';
import { Countries } from '../_model/countries.model';
import { League } from '../_model/league.model';
import { SeasonStanding } from '../_model/seasonStanding.model';
import { LoginUser } from '../_model/login.model';

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
            return response as League
        }))
    }

    /**
     * API RICERCA STANDING LEAGUES
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    searchTeamsLeagueStandings(idLeague: number) {
        return this.http.get('http://localhost:8080/standings/all_by_league?idLeague=' + idLeague + '&season=2022-2023').pipe(map((response: any) => {
            return response as SeasonStanding[]
        }))
    }

    /**
     * API RICERCA TEAM LEAGUES
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
     * API RICERCA LEAGUES PER COUNTRY
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    searchTeamsLeagueByCountry(idLeague: number) {
        return this.http.get('http://localhost:8080/league/league_country?id=' + idLeague).pipe(map((response: any) => {
            return response as LeagueByCountry
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
     * API RICERCA TEAM PLAYER
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

    /**
     * API RICERCA COUNTRY
     * 
     * @param idPlayer
     * @returns richiesta Api 
     */
    searchAllCountry() {
        return this.http.get('http://localhost:8080/country/all').pipe(map((response: any) => {
            return response as Countries[]
        }))
    }

    /**
     * API RICERCA LEGUES BY COUNTRY
     * 
     * @param idCountry
     * @returns richiesta Api 
     */
    searchLeaguesByCountry(idCountry: number) {
        return this.http.get('http://localhost:8080/league/league_country?id=' + idCountry).pipe(map((response: any) => {
            return response as Leagues[]
        }))
    }

    /**
     * API REGISTRAZIONE UTENTE
     * 
     * @param nome @param cognome @param email @param password
     * @returns richiesta Api 
     */
    searchNewUser(nome: string, cognome: string, email: string, password: string) {        
        const data = {
            name: nome,
            surname: cognome,
            email: email,
            password: password,
          };
      
          // Specifica le intestazioni, se necessario
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
          });
      
          // Effettua la chiamata HTTP usando il metodo post
          return this.http.post('http://localhost:8080/user/create', data, { headers: headers });
    }

    /**
     * API ACCESSO UTENTE
     * 
     * @param
     * @returns richiesta Api 
     */
    searchUserLogin(email: string) {

        var x = this.http.get('http://localhost:8080/user/getEmail/' + email);
        console.log(x);
         
        return this.http.get('http://localhost:8080/user/getEmail/' + email).pipe(map((response: any) => {
            console.log(response);
            return response as LoginUser
        }))
    }
}