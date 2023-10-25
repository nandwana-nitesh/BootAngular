import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulebRoutingModule } from './moduleb-routing.module';
import { ModulebComponent } from './moduleb.component';


@NgModule({
  declarations: [
    ModulebComponent
  ],
  imports: [
    CommonModule,
    ModulebRoutingModule
  ]
})
export class ModulebModule { }
