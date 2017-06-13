import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { FootballPitchesComponent } from './football-pitches.component';
import { routing } from './football-pitches.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,

  ],
  declarations: [
    FootballPitchesComponent,
  ],
  bootstrap: [ 
     FootballPitchesComponent, 
  ],
})
export class FootballPitchesModule {}
