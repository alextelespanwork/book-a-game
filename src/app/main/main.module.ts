import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './main.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Main } from './main.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Main],
})
export class MainModule {
}
