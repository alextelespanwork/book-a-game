import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { ContactComponent } from './contact.component';

import { routing } from './contact.routing';

import { MainService } from '../services/main.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
  ],
  declarations: [
    ContactComponent,
  ],
  bootstrap: [ 
     ContactComponent,      
  ],
  providers: [
    MainService,
  ],
})
export class ContactModule {}
