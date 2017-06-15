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
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
