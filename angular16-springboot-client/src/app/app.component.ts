import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { SampleService } from './sample.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 16 + Spring Boot 3 CRUD Tutorial';
  show = true;
  color= "blue"
  
  constructor(private loginService:LoginService,private router:Router,private sampleService:SampleService,private fb:FormBuilder){
    this.sampleService.test();
    this.sampleService.getMessage().subscribe(msg=>console.info(msg));
    this.sampleService.setMessage("Hello!! , from App Component."); 
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(["login"]);
  }
}
