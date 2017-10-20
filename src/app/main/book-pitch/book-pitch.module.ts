import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { BookPitchComponent } from './book-pitch.component';

import { routing } from './book-pitch.routing';

import { MainService } from '../services/main.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
  ],
  declarations: [
    BookPitchComponent,
  ],
  bootstrap: [ 
    BookPitchComponent,      
  ],
  providers: [
    MainService,
  ],
})
export class BookPitchModule {}
