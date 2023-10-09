import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthHttpinterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService,private router:Router){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.loginService.getToken();
   
        if(token!=null){
            req = req.clone({setHeaders:{Authorization:'Bearer '+token}});
        }
        return next.handle(req);
       
    }
    
}
