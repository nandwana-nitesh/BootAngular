import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user';
import { LoginService } from './login.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent {
    user:User;
    token:String="";
   
    constructor(private route: ActivatedRoute,private router: Router,
      private loginService: LoginService) { 
        this.user = new User(0,'','','',"");
      }

    login(){
          if(this.user.password&& this.user.name){
                this.loginService.authenticateAndGetToken({"username":this.user.name,"password":this.user.password,"roles":"ROLE_USER"})
                .subscribe((data)=>{
                  this.token=data.toString();
                  if(this.token!=null && this.token!=''){
                    localStorage.setItem("token",this.token.valueOf());
                    this.router.navigate(["employees"]);
                  }
                },(error)=>{ console.error(error)},
                  ()=>{ console.info("AuthenticateAndGetToken call completed.")}
                );
          }else{
             alert("login failed");
          }
    }

    signup(){
     
        if(this.user.password&& this.user.name){
          this.loginService.signup({"name":this.user.name,"password":this.user.password,"roles":"ROLE_USER"})
          .subscribe({
              next:(data) =>console.log(data),error:(error) => console.error(error),complete:()=>console.info("signup call completed.")
        });
        }else{
         alert("please fill the details.")
        }
    }
  
}
