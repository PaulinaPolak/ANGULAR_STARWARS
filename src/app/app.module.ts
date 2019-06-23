import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PostersComponent } from './posters/posters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PersonprofileComponent } from './personprofile/personprofile.component';
import { MatExpansionModule } from '@angular/material/expansion';

const Routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'characters/:page',
    component: CharactersComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'planets',
    component: PlanetsComponent,
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'posters',
    component: PostersComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    PlanetsComponent,
    NavigationComponent,
    HomeComponent,
    PostersComponent,
    PersonprofileComponent,
  ],
  imports: [
    RouterModule.forRoot(Routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
