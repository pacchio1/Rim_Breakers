import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

import { BasketService } from './_service/basket.service';
import { TeamComponent } from './team/team.component';

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
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
