import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { WelcomeComponent } from './welcome.component';
import { routing } from './welcome.routing';

import { MainService } from '../services/main.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,

  ],
  declarations: [
    WelcomeComponent,
  ],
  bootstrap: [ 
     WelcomeComponent, 
  ],
  providers: [
    MainService,
  ],
})
export class WelcomeModule {}
