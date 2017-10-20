import { Routes, RouterModule } from '@angular/router';

import { BookPitchComponent } from './book-pitch.component';

const routes: Routes = [
  {
    path: '',
    component: BookPitchComponent,
  }
];

export const routing = RouterModule.forChild(routes);
