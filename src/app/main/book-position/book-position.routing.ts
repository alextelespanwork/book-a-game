import { Routes, RouterModule } from '@angular/router';

import { BookPositionComponent } from './book-position.component';

const routes: Routes = [
  {
    path: '',
    component: BookPositionComponent,
  }
];

export const routing = RouterModule.forChild(routes);
