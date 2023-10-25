import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleaRoutingModule } from './modulea-routing.module';
import { ModuleaComponent } from './modulea.component';


@NgModule({
  declarations: [
    ModuleaComponent
  ],
  imports: [
    CommonModule,
    ModuleaRoutingModule
  ]
})
export class ModuleaModule { }
