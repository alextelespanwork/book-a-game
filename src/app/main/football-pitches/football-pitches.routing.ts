import { Routes, RouterModule } from '@angular/router';

import { FootballPitchesComponent } from './football-pitches.component';

const routes: Routes = [
  {
    path: '',
    component: FootballPitchesComponent
  }
];

export const routing = RouterModule.forChild(routes);
