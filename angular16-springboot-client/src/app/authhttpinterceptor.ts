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
        let t = this.loginService.getToken();
   
        if(t!=null){
            console.log(t);
            req = req.clone({setHeaders:{Authorization:'Bearer '+t}});
        }
        console.log(req);
        return next.handle(req);
       
    }
    
}
