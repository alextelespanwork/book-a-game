import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { AddFootballPitchComponent } from './add-football-pitch.component';
import { FootballPitchLayoutComponent } from '../football-pitch-layout/football-pitch-layout.component';
import { routing } from './add-football-pitch.routing';

import { MainService } from '../services/main.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
  ],
  declarations: [
    AddFootballPitchComponent,
    FootballPitchLayoutComponent,
  ],
  bootstrap: [ 
     AddFootballPitchComponent,      
  ],
  providers: [
    MainService,
    FootballPitchLayoutComponent,
  ],
})
export class AddFootballPitchModule {}
