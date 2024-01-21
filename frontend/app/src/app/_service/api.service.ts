import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { PlayerDetail } from '../_model/player.model';
import { LeagueByCountry, Leagues } from '../_model/leagues.model';
import { Team } from '../_model/team.model';
import { Countries } from '../_model/countries.model';
import { League } from '../_model/league.model';
import { SeasonStandingAll } from '../_model/seasonStanding.model';
import { Profile } from '../_model/profile.model';
import { Match } from '../_model/match.model';

// import { SunsetResults } from '../model/sunset.model';

@Injectable({
	 providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}

    localBaseUrl: string = 'http://localhost:8080/'
    onlineBaseUrl: string = 'http://rimbreakers.ddns.net:8080/'

    /**
     * API RICERCA LEAGUE
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    searchLeague(idLeague: number) {
        return this.http.get(this.localBaseUrl + 'league/number?id=' + idLeague).pipe(map((response: any) => {
            return response as League
        }))
    }

    /**
     * API RICERCA ALL LEAGUE
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    searchAllLeague() {
        return this.http.get(this.localBaseUrl + 'league/all').pipe(map((response: any) => {
            return response as League[]
        }))
    }

    /**
     * API RICERCA STANDING LEAGUES
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    searchTeamsLeagueStandings(idLeague: number) {
        return this.http.get(this.localBaseUrl + 'standings/all_by_league?idLeague=' + idLeague + '&season=2022-2023').pipe(map((response: any) => {
            return response as SeasonStandingAll[]
        }))
    }

    /**
     * API RICERCA STANDING LEAGUES 
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    searchTeamsLeagueStandingsEcception(idLeague: number) {
        return this.http.get(this.localBaseUrl + 'standings/all_by_league?idLeague=' + idLeague + '&season=2023').pipe(map((response: any) => {
            return response as SeasonStandingAll[]
        }))
    }

    /**
     * API RICERCA TEAM LEAGUES
     * 
     * @param idLeague
     * @returns richiesta Api 
     */
    searchTeamsLeague(idLeague: number) {
        return this.http.get(this.localBaseUrl + 'league/team_league?id=' + idLeague).pipe(map((response: any) => {
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
        return this.http.get(this.localBaseUrl + 'league/league_country?id=' + idLeague).pipe(map((response: any) => {
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
        return this.http.get(this.localBaseUrl + 'team/all_by_id?id=' + idTeam).pipe(map((response: any) => {
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
        return this.http.get(this.localBaseUrl + 'player/team?id_team=' + idTeam).pipe(map((response: any) => {
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
        return this.http.get(this.localBaseUrl + 'player/number?id=' + idPlayer).pipe(map((response: any) => {
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
        return this.http.get(this.localBaseUrl + 'country/all').pipe(map((response: any) => {
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
        return this.http.get(this.localBaseUrl + 'league/league_country?id=' + idCountry).pipe(map((response: any) => {
            return response as Leagues[]
        }))
    }
    
    /**
     * API RICERCA GAMES BY LEAGUE
     * 
     * @param idCountry
     * @returns richiesta Api 
     */
    searchGamesByLeague(leagueName: string) {
        return this.http.get(this.localBaseUrl + 'games/games_league?name=' + leagueName).pipe(map((response: any) => {
            return response as any[]
        }))
    }
    
    /**
     * API RICERCA GAME
     * 
     * @param idCountry
     * @returns richiesta Api 
     */
    searchGame(idLeague: number) {
        return this.http.get(this.localBaseUrl + 'games/all_by_id?id_games=' + idLeague).pipe(map((response: any) => {
            return response as any[]
        }))
    }

    /**
     * API REGISTRAZIONE UTENTE
     * 
     * @param nome @param cognome @param email @param password
     * @returns richiesta Api 
     */
    createNewUser(nome: string, cognome: string, email: string, password: string) {        
        const body = {
            name: nome,
            surname: cognome,
            email: email,
            password: password,
        };
        return this.http.post(this.localBaseUrl + 'user/create?name='+body.name+'&surname='+body.surname+'&email='+body.email+'&password='+body.password, body);
    }

    /**
     * API ACCESSO UTENTE
     * 
     * @param email @param password
     * @returns richiesta Api 
     */
    userLogin(email: string, password: string) {
        const body = { 
            email: email, 
            password: password 
        };
        return this.http.post(this.localBaseUrl + 'user/login?email='+body.email+'&password='+body.password, body);
    }
    
    /**
     * API RICERCA UTENTE TRAMITE EMAIL
     * 
     * @param email
     * @returns richiesta Api 
     */
    searchUserByEmail(email: string) {
        return this.http.get(this.localBaseUrl + 'user/getEmail?email='+email).pipe(map((response: any) => {
            return response as Profile
        }))
    }

    /**
     * API MODIFICA PASSWORD
     * 
     * @param password @param idUser
     * @returns richiesta Api 
     */
    updateUserPassword(password: string, idUser: number) {
        const body = { 
            password: password, 
            idUser: idUser
        };
        return this.http.post('http://localhost:8080/user/updatePassword?password='+body.password+'&id='+body.idUser, body);
    }

    /**
     * API ELIMINA ACCOUNT
     * 
     * @param idUser
     * @returns richiesta Api 
     */
    deleteUser(idUser: number) {
        const body = {
            idUser: idUser
        };
        return this.http.post('http://localhost:8080/user/delete?id='+body.idUser, body);
    }
}