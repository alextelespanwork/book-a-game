import { Routes, RouterModule } from '@angular/router';

import { CreateGameComponent } from './create-game.component';

const routes: Routes = [
  {
    path: '',
    component: CreateGameComponent,
  }
];

export const routing = RouterModule.forChild(routes);
