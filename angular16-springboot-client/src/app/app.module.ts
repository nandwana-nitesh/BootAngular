import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthHttpinterceptor } from './authhttpinterceptor';
import { authGuard } from './auth.guard';
import { MyclassDirective } from './myclass.directive';
import { MyIfDirective } from './my-if.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    MyclassDirective,
    MyIfDirective,
    ParentComponent,
    ChildComponent,
    NotFoundComponent,
    ReactiveFormComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,[{provide:HTTP_INTERCEPTORS,useClass:AuthHttpinterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
