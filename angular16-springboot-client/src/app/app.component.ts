import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 16 + Spring Boot 3 CRUD Tutorial';

  constructor(private loginService:LoginService,private router:Router){

    //
    const ob = of("a","b","c","d","e");
    const obk =ob.subscribe({ 
      
        next(v){
          console.info(v);
        },
        error(e){
          console.error(e);
        },
        complete(){
          console.info("completed");
        }      
      });
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(["login"]);
 
   }
}
