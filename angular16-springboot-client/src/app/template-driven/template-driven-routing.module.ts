import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven.component';

const routes: Routes = [{ path: '', component: TemplateDrivenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenRoutingModule { }
