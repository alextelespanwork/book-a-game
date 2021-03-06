import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { FootballPitchesComponent } from './football-pitches.component';
import { routing } from './football-pitches.routing';
import { NameSearchPipe } from './name-search.pipe';

import { MainService } from '../services/main.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,

  ],
  declarations: [
    FootballPitchesComponent,
    NameSearchPipe,
  ],
  bootstrap: [ 
     FootballPitchesComponent, 
  ],
  providers: [
    MainService,
  ],
})
export class FootballPitchesModule {}
