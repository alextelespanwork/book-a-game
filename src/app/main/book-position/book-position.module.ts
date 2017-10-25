import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { BookPositionComponent } from './book-position.component';
import { FootballPitchLayoutComponent } from '../football-pitch-layout/football-pitch-layout.component';

import { routing } from './book-position.routing';

import { MainService } from '../services/main.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
  ],
  declarations: [
    BookPositionComponent,
    FootballPitchLayoutComponent,
  ],
  bootstrap: [ 
    BookPositionComponent,      
  ],
  providers: [
    MainService,
  ],
})
export class BookPositionModule {}
