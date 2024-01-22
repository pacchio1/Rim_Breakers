import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../_service/profile.service';
import { BasketService } from '../_service/basket.service';
import { FavouriteLeague, FavouritePlayer, FavouriteTeam } from '../_model/favouriteItems.model';
import { League } from '../_model/league.model';
import { Team } from '../_model/team.model';
import { PlayerDetail } from '../_model/player.model';

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

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private basketService: BasketService, private router: Router) {}

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

        console.log(this.favouriteLeagues);

        this.profileService.getAllFavouriteTeams(this.account.idUser).subscribe((response: any) => {
          this.favTeams = response.map((item: FavouriteTeam) => item.idTeam);

          for (const teamId of this.favTeams) {
            this.favouriteTeam(teamId);
          }
  
          console.log(this.favouriteTeams);
  
          this.profileService.getAllFavouritePlayers(this.account.idUser).subscribe((response: any) => {
            this.favPlayers = response.map((item: FavouritePlayer) => item.idPlayer);

            for (const playerId of this.favPlayers) {
              this.favouritePLayer(playerId);
            }
    
            console.log(this.favouritePlayers);

          });
        });
      });
    }
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
    })
  }

  favouriteTeam(idTeam: number) {
    this.basketService.getTeam(idTeam).subscribe((response: Team) => {
      this.favouriteTeams.push(response); 
    })
  }

  favouritePLayer(idPlayer: number) {
    this.basketService.getSinglePlayer(idPlayer).subscribe((response: PlayerDetail) => {
      this.favouritePlayers.push(response); 
    })
  }
}
