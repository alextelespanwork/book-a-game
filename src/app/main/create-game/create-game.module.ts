import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { CreateGameComponent } from './create-game.component';

import { routing } from './create-game.routing';

import { MainService } from '../services/main.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
  ],
  declarations: [
    CreateGameComponent,
  ],
  bootstrap: [ 
     CreateGameComponent,      
  ],
  providers: [
    MainService,
  ],
})
export class CreateGameModule {}
