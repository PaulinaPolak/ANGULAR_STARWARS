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

const Routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,

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
  ],
  imports: [
    RouterModule.forRoot(Routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
