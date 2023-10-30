import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFrom2RoutingModule } from './reactive-from2-routing.module';
import { ReactiveFrom2Component } from './reactive-from2.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveFrom2Component
  ],
  imports: [
    CommonModule,
    ReactiveFrom2RoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFrom2Module { }
