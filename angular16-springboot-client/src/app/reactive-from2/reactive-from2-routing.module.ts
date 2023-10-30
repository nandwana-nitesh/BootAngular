import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFrom2Component } from './reactive-from2.component';

const routes: Routes = [{ path: '', component: ReactiveFrom2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFrom2RoutingModule { }
