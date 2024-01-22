import { Component, OnInit } from "@angular/core";
import { BasketService } from "../_service/basket.service";
import { ThemeService } from "../_service/dark-mode.service";
import { ActivatedRoute } from "@angular/router";
import { Leagues } from "../_model/leagues.model";
import { League } from "../_model/league.model";
import { PlayerDetail } from "../_model/player.model";

interface DropdownState {
    teams: boolean;
    players: boolean;
    [key: string]: boolean; // Aggiungi questa riga
}
  
@Component({
  selector: 'app-pick-favourites',
  templateUrl: './pick-favourites.component.html',
})

export class PickFavouritesComponent implements OnInit {

  banditLeagues = [120, 143, 194, 197, 242]; 
  filteredLeagues: League[] = [];
  selectedLeagueTeams: Leagues[] = [];
  selectedTeamPlayers: { [key: number]: PlayerDetail[] } = {};
  dropdownState: { [key: number]: DropdownState } = {};
  currentOpenLeague: number | null = null;
  currentOpenTeam: number | null = null;

  constructor(public themeService: ThemeService, private basketService: BasketService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({allLeagues}) => {
      this.filteredLeagues = allLeagues.filter((league: League) => !this.banditLeagues.includes(league.id_league));
    });
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

  onTeamClick(idTeam: number) {
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
  
  toggleDropdown(id: number): void {
    // Cambia lo stato del dropdown in base alla lea, team o giocatori
    this.dropdownState[id] = { teams: !this.dropdownState[id]?.teams, players: !this.dropdownState[id]?.players } as DropdownState;
  }
  
  
  isDropdownOpen(id: number, type: string): boolean {
    // Controlla lo stato del dropdown in base alla lega, team o giocatori
    return this.dropdownState[id]?.[type] || false;
  }
}
