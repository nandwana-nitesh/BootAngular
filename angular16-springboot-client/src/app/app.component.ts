import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 16 + Spring Boot 3 CRUD Tutorial';

  constructor(private loginService:LoginService,private router:Router,private sampleService:SampleService){
    this.sampleService.test(); 
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(["login"]);
  }
}
