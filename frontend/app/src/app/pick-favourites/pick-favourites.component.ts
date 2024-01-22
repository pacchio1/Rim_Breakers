import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { ThemeService } from "../_service/dark-mode.service";
import { ActivatedRoute } from "@angular/router";
import { Leagues } from "../_model/leagues.model";
import { League } from "../_model/league.model";
import { PlayerDetail } from "../_model/player.model";
import { ProfileService } from "../_service/profile.service";
import { FavouriteLeague, FavouritePlayer, FavouriteTeam } from "../_model/favouriteItems.model";

interface DropdownState {
  teams: boolean;
  players: boolean;
  [key: string]: boolean;
}

@Component({
  selector: 'app-pick-favourites',
  templateUrl: './pick-favourites.component.html',
})
export class PickFavouritesComponent implements OnInit {

  email = localStorage.getItem('emailAccount') ?? '';
  idUser: number = 0; 
  banditLeagues = [120, 143, 194, 197, 242];
  filteredLeagues: League[] = [];
  selectedLeagueTeams: Leagues[] = [];
  selectedTeamPlayers: { [key: number]: PlayerDetail[] } = {};
  dropdownState: { [key: number]: DropdownState } = {};
  currentOpenLeague: number | null = null;
  currentOpenTeam: number | null = null;
  favouriteLeagues: { [key: number]: boolean } = {};
  favouriteTeams: { [key: number]: boolean } = {};
  favouritePlayers: { [key: number]: boolean } = {};

  favLeagues: number[] = [];
  favTeams: number[] = [];
  favPlayers: number[] = [];

  constructor(public themeService: ThemeService, private basketService: BasketService, private activatedRoute: ActivatedRoute, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({allLeagues}) => {
      this.filteredLeagues = allLeagues.filter((league: League) => !this.banditLeagues.includes(league.id_league));
    });

    this.profileService.getUserByEmail(this.email).subscribe((response) => {
      this.idUser = response.idUser; 

      console.log(this.idUser);

      this.alreadyFavLeagues(this.idUser);
      this.alreadyFavTeams(this.idUser);
      this.alreadyFavPlayers(this.idUser);
    })
  }

  onLeagueClick(idLeague: number): void {
    // Chiudi la sezione dei team se è già aperta
    if (this.currentOpenLeague === idLeague) {
      Object.keys(this.dropdownState).forEach(key => {
        this.dropdownState[+key] = { teams: false, players: false };
      });
      this.currentOpenLeague = null;
      this.currentOpenTeam = null;
    } else {
      // Chiudi tutti i dropdown dei team e dei giocatori
      Object.keys(this.dropdownState).forEach(key => {
        this.dropdownState[+key] = { teams: false, players: false };
      });

      // Apri il dropdown dei team solo se non è già aperto
      if (!this.dropdownState[idLeague]?.teams) {
        this.dropdownState[idLeague] = { teams: true, players: false };
        this.currentOpenLeague = idLeague;
        this.currentOpenTeam = null;

        this.basketService.getTeamsLeague(idLeague).subscribe((teams: Leagues[]) => {
          this.selectedLeagueTeams = teams;
        });
      }
    }
  }

  onTeamClick(idTeam: number, event: Event) {
    event.stopPropagation();

    // Chiudi la sezione dei team se è già aperta
    if (this.currentOpenTeam === idTeam) {
      this.currentOpenTeam = null;
    } else {
      // Verifica se il dropdown dei giocatori è già aperto per il team
      if (this.dropdownState[idTeam]?.players) {
        // Chiudi il dropdown dei giocatori
        this.dropdownState[idTeam] = { teams: false, players: false };
      } else {
        // Carica i giocatori del team selezionato
        this.basketService.getTeamPlayers(idTeam).subscribe((players: PlayerDetail[]) => {
          this.selectedTeamPlayers[idTeam] = players;
          // Apri il dropdown dei giocatori per il team selezionato
          this.dropdownState[idTeam] = { teams: false, players: true };
        });

        this.currentOpenTeam = idTeam;
      }
    }
  }

  alreadyFavLeagues(idUser: number) {
    this.profileService.getAllFavouriteLeagues(idUser).subscribe((response: any) => {
      this.favLeagues = response.map((item: FavouriteLeague) => item.idLeague);

      for(const id of this.favLeagues) {
        this.favouriteLeagues[id] = !this.favouriteLeagues[id];
      }

      console.log(this.favLeagues);
      

    })
  }

  alreadyFavTeams(idUser: number) {
    this.profileService.getAllFavouriteTeams(idUser).subscribe((response: any) => {
      this.favTeams = response.map((item: FavouriteTeam) => item.idTeam);

      for(const id of this.favTeams) {
        this.favouriteTeams[id] = !this.favouriteTeams[id];
      }

      console.log(this.favTeams);

    })
  }

  alreadyFavPlayers(idUser: number) {
    this.profileService.getAllFavouritePlayers(idUser).subscribe((response: any) => {
      this.favPlayers = response.map((item: FavouritePlayer) => item.idPlayer);

      for(const id of this.favPlayers) {
        this.favouritePlayers[id] = !this.favouritePlayers[id];
      }

      console.log(this.favPlayers);

    })
  }

  favouriteLeague(idUser: number, idLeague: number) {
    this.favouriteLeagues[idLeague] = !this.favouriteLeagues[idLeague];

    if(this.favouriteLeagues[idLeague]) {
      this.profileService.getFavouriteLeague(idUser, idLeague).subscribe((response) => {
        console.log(response);
      })
    }
    else {
      this.profileService.getNotFavouriteLeague(idUser, idLeague).subscribe((response) => {
        console.log(response);
      })
    }
  }

  favouriteTeam(idUser: number, idTeam: number) {
    this.favouriteTeams[idTeam] = !this.favouriteTeams[idTeam];
    if(this.favouriteTeams[idTeam]) {
      this.profileService.getFavouriteTeam(idUser, idTeam).subscribe((response) => {
        console.log(response);
      }); 
    }
    else {
      this.profileService.getNotFavouriteTeam(idUser, idTeam).subscribe((response) => {
        console.log(response);
      })
    }
  }

  favouritePlayer(idUser: number, idPlayer: number) {
    this.favouritePlayers[idPlayer] = !this.favouritePlayers[idPlayer];
    if(this.favouritePlayers[idPlayer]) {
      this.profileService.getFavouritePlayer(idUser, idPlayer).subscribe((response) => {
        console.log(response);        
      }); 
    }
    else {
      this.profileService.getNotFavouritePlayer(idUser, idPlayer).subscribe((response) => {
        console.log(response);
      })
    }
  }

  toggleDropdown(id: number): void {
    // Cambia lo stato del dropdown in base alla lega, team o giocatori
    this.dropdownState[id] = { teams: !this.dropdownState[id]?.teams, players: !this.dropdownState[id]?.players } as DropdownState;
  }

  isDropdownOpen(id: number, type: string): boolean {
    // Controlla lo stato del dropdown in base alla lega, team o giocatori
    return this.dropdownState[id]?.[type] || false;
  }
}
