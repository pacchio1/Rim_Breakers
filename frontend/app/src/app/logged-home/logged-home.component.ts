import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../_service/profile.service';
import { BasketService } from '../_service/basket.service';
import { FavouriteLeague, FavouritePlayer, FavouriteTeam } from '../_model/favouriteItems.model';
import { League } from '../_model/league.model';
import { Team } from '../_model/team.model';
import { PlayerDetail } from '../_model/player.model';
import { Match } from '../_model/match.model';
import { ThemeService } from '../_service/dark-mode.service';

@Component({
  selector: 'app-logged-home',
  templateUrl: './logged-home.component.html',
})
export class LoggedHomeComponent implements OnInit{

  account: any; 

  favLeagues: number[] = [];
  favTeams: number[] = [];
  favPlayers: number[] = [];

  favouriteLeagues: League[] = []; 
  favouriteTeams: Team[] = []; 
  favouritePlayers: PlayerDetail[] = []; 

  lastLeagueMatches: Match[] = []; 
  processedMatchesLeague: any[] = []; 

  lastTeamMatches: Match[] = []; 
  processedMatchesTeam: any[] = []; 

  constructor(public themeService: ThemeService, private route: ActivatedRoute, private profileService: ProfileService, private basketService: BasketService, private router: Router) {}

  ngOnInit(): void {
    this.account = this.route.snapshot.data['account']; 
    console.log(this.account);

    this.loadFavourites(); 
  }

  loadFavourites() {
    if(this.account) {
      this.profileService.getAllFavouriteLeagues(this.account.idUser).subscribe((response: any) => {
        this.favLeagues = response.map((item: FavouriteLeague) => item.idLeague);
        
        for (const leagueId of this.favLeagues) {
          this.favouriteLeague(leagueId);
        }

        // console.log(this.favouriteLeagues);

        this.profileService.getAllFavouriteTeams(this.account.idUser).subscribe((response: any) => {
          this.favTeams = response.map((item: FavouriteTeam) => item.idTeam);

          for (const teamId of this.favTeams) {
            this.favouriteTeam(teamId);
          }
  
          // console.log(this.favouriteTeams);
  
          this.profileService.getAllFavouritePlayers(this.account.idUser).subscribe((response: any) => {
            this.favPlayers = response.map((item: FavouritePlayer) => item.idPlayer);

            for (const playerId of this.favPlayers) {
              this.favouritePLayer(playerId);
            }
    
            // console.log(this.favouritePlayers);

          });
        });
      });
    }
  }

  lastLeagueGames(leagueName: string) {
    this.basketService.getGamesByLeague(leagueName).subscribe((response) => {
      this.lastLeagueMatches = response;

      const processedLeagueMatches = response.map((game: any) => this.processGame(game));
      this.processedMatchesLeague.push(...processedLeagueMatches);
      
      // console.log(this.lastLeagueMatches);
    })
  }

  lastTeamGames(teamName: string) {
    this.basketService.getGamesByTeam(teamName).subscribe((response) => {
      this.lastTeamMatches = response; 

      const processedTeamMatches = response.map((game: any) => this.processGame(game));
      this.processedMatchesTeam.push(...processedTeamMatches);
      
      // console.log(this.processedMatchesTeam);
      
      // console.log(this.lastTeamMatches);
    })
  }

  passIdLeague(idLeague: number) {
    this.router.navigate(['/leagues', idLeague])
  }

  passIdTeam(idTeam: number) {
    this.router.navigate(['/team', idTeam])
  }

  passIdPlayer(idPlayer: number) {
    this.router.navigate(['/player', idPlayer])
  }

  favouriteLeague(idLeague: number) {
    this.basketService.getLeague(idLeague).subscribe((response: League) => {
      this.favouriteLeagues.push(response);
      const league = this.favouriteLeagues[(this.favouriteLeagues.length - 1)]; 
      
      this.lastLeagueGames(league.name); 
    })
  }

  favouriteTeam(idTeam: number) {
    this.basketService.getTeam(idTeam).subscribe((response: Team) => {
      this.favouriteTeams.push(response); 

      const team = this.favouriteTeams[(this.favouriteTeams.length - 1)]; 
      
      this.lastTeamGames(team.name);
    })
  }

  favouritePLayer(idPlayer: number) {
    this.basketService.getSinglePlayer(idPlayer).subscribe((response: PlayerDetail) => {
      this.favouritePlayers.push(response); 
      
      this.basketService.getTeam(response.idTeam).subscribe((teamDetails: Team) => {
        // Aggiungi il logo della squadra ai dettagli del giocatore
        response.teamLogo = teamDetails.logo;
        response.teamName = teamDetails.name; 
      });
    })
  }

  getProcessedMatchesByLeague(leagueName: string): any[] {
    return this.processedMatchesLeague.filter(game => game.nameLeague === leagueName);
  }

  getProcessedMatchesByTeam(teamName: string): any[] {
    return this.processedMatchesTeam.filter(game => {
        if (this.favouriteTeams.find(team => team.name === teamName && team.id === game.homeId)) {
            // Squadra corrispondente alla squadra di casa
            return game.teamHome === teamName;
        } else if (this.favouriteTeams.find(team => team.name === teamName && team.id === game.awayId)) {
            // Squadra corrispondente alla squadra in trasferta
            return game.teamAway === teamName;
        }
        return false; // Nessuna corrispondenza per la squadra
    });
}


  passIdGames(idGames: number) {
      this.router.navigate(['/game', idGames])
  }

  private processGame(game: any): any {
    function parseScore(scoreString: string): (number | null)[] {
        return scoreString.split(',').map(value => (value === 'None' ? null : parseInt(value, 10)));
    }

    const scoreAwayArray = parseScore(game.scoreAway);
    const scoreHomeArray = parseScore(game.scoreHome);

    const processedGame = {
        ...game,
        firstQuarterAway: scoreAwayArray[0],
        secondQuarterAway: scoreAwayArray[1],
        thirdQuarterAway: scoreAwayArray[2],
        fourthQuarterAway: scoreAwayArray[3],
        fifthQuarterAway: scoreAwayArray[4],
        scoreAwayFinal: scoreAwayArray[5],
        scoreAway: scoreAwayArray,
        
        firstQuarterHome: scoreHomeArray[0],
        secondQuarterHome: scoreHomeArray[1],
        thirdQuarterHome: scoreHomeArray[2],
        fourthQuarterHome: scoreHomeArray[3],
        fifthQuarterHome: scoreHomeArray[4],
        scoreHomeFinal: scoreHomeArray[5],
        scoreHome: scoreHomeArray,
    };
    
    return processedGame;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}