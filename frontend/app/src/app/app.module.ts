import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { TeamComponent } from './team/team.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { CountriesComponent } from './countries/countries.component';
import { RankingComponent } from './ranking/ranking.component';
import { SigninComponent } from './signin/signin.component';
import { ScorerComponent } from './scorer/scorer.component';
import { AssistComponent } from './assist/assist.component';
import { LeagueMatchComponent } from './league-match/league-match.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { PickFavouritesComponent } from './pick-favourites/pick-favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogCardComponent,
    ProfileComponent,
    LoginComponent,
    ContactComponent,
    LeaguesComponent,
    RankingComponent,
    ScorerComponent,
    AssistComponent,
    LeagueMatchComponent,
    TeamComponent,
    PlayerCardComponent,
    PlayerDetailComponent,
    CountriesComponent,
    GamesComponent,
    GameDetailComponent,
    FooterComponent,
    SigninComponent,
    ProfileComponent,
    PickFavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
