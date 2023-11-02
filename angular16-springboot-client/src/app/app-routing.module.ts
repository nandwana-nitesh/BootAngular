import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path:"reactive",component:ReactiveFormComponent},
  { path:"observer",component:ObservableComponent},
  { path: 'employees', component: EmployeeListComponent,canActivate:[authGuard]},
  { path: 'add', component: CreateEmployeeComponent,canActivate:[authGuard] },
  { path: 'update/:id', component: UpdateEmployeeComponent,canActivate:[authGuard] },
  { path: 'details/:id', component: EmployeeDetailsComponent,canActivate:[authGuard] },
  { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
  { path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) },
  { path: 'template2', loadChildren: () => import('./template-driven/template-driven.module').then(m => m.TemplateDrivenModule) },
  { path: 'reactive2', loadChildren: () => import('./reactive-from2/reactive-from2.module').then(m => m.ReactiveFrom2Module) },
  { path:"**",component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
