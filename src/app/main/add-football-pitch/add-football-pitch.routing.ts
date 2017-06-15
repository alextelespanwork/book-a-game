import { Routes, RouterModule } from '@angular/router';

import { AddFootballPitchComponent } from './add-football-pitch.component';

const routes: Routes = [
  {
    path: '',
    component: AddFootballPitchComponent,
  }
];

export const routing = RouterModule.forChild(routes);
