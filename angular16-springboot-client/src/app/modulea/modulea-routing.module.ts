import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleaComponent } from './modulea.component';

const routes: Routes = [{ path: '', component: ModuleaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleaRoutingModule { }
