import { Routes, RouterModule }  from '@angular/router';
import { Main } from './main.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

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
      { path: '', redirectTo: 'football-pitches', pathMatch: 'full' },
      { path: 'football-pitches', loadChildren: './football-pitches/football-pitches.module#FootballPitchesModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
