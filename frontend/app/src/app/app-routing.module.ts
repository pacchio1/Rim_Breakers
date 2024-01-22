import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CountriesComponent } from './countries/countries.component';
import { TeamComponent } from './team/team.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

import { BasketService } from './_service/basket.service';
import { SigninComponent } from './signin/signin.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { TeamsPreviewComponent } from './teams-preview/teams-preview.component';
import { PickFavouritesComponent } from './pick-favourites/pick-favourites.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blogDetail/:id', component: BlogDetailComponent },
  { path: 'leagues/:id', 
    component: LeaguesComponent,
    resolve: {
      league: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(BasketService).getTeamsLeague(parseInt(route.paramMap.get('id')!))
      }
    } },
  { path: 'team', 
    component: TeamsPreviewComponent,
    resolve: {
      allLeagues: () => {
        return inject(BasketService).getAllLeague()
      },
    } },
  { path: 'team/:id', 
    component: TeamComponent,
    resolve: {
      teamDetail: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(BasketService).getTeam(parseInt(route.paramMap.get('id')!))
      },
      teamPlayers: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(BasketService).getTeamPlayers(parseInt(route.paramMap.get('id')!))
      },
    } },
  { path: 'player/:id', 
    component: PlayerDetailComponent, 
    resolve: {
      playerDetail: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(BasketService).getSinglePlayer(parseInt(route.paramMap.get('id')!))
      }
    } },
  { path: 'countries',
    component: CountriesComponent,
    resolve: {
      allCountries: () => {
        return inject(BasketService).getAllCountries()
      }, 
    }
  },
  { path: 'games',
    component: GamesComponent,
    resolve: {
      allLeagues: () => {
        return inject(BasketService).getAllLeague()
      }, 
    }
  },
  { path: 'game/:id',
    component: GameDetailComponent,
    resolve: {
      matchDetail: (route: ActivatedRouteSnapshot) => {
        return inject(BasketService).getGame(parseInt(route.paramMap.get('id')!))
      }, 
    }
  },
  { path: 'pick-favourites',
    component: PickFavouritesComponent,
    resolve: {
      allLeagues: () => {
        return inject(BasketService).getAllLeague()
      }, 
    }
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
