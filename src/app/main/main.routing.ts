import { Routes, RouterModule }  from '@angular/router';
import { Main } from './main.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: '',
    component: Main,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule' },
      { path: 'football-pitches', loadChildren: './football-pitches/football-pitches.module#FootballPitchesModule' },
      { path: 'add-football-pitch', loadChildren: './add-football-pitch/add-football-pitch.module#AddFootballPitchModule' },
      { path: 'book-pitch', loadChildren: './book-pitch/book-pitch.module#BookPitchModule' },
      { path: 'book-position', loadChildren: './book-position/book-position.module#BookPositionModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },  
      { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' },        
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);