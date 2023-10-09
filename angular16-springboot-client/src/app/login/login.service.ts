import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable(
  // {
  //  providedIn: 'root'
  // }
)
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/v1/generateToken';
  private addNewUser = 'http://localhost:8080/api/v1/addNewUser';
 
  constructor(private http: HttpClient) { 
    
  }

  authenticateAndGetToken(user: any) {
    let HTTPOptions:Object = {

      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      }),
      responseType: 'text'
   } 
    const body=JSON.stringify(user);
    return this.http.post<String>(this.baseUrl,body,HTTPOptions);
  }

  
  signup(user: any):Observable<String>{
    return this.http.post<String>(this.addNewUser,user);
  }
 
  isLoggedIn(){
    if(localStorage.getItem("token"))
      return true;
    return false;
  }  

  logout(){
    localStorage.removeItem("token");
    return false;
  }

  getToken(){
    return localStorage.getItem("token");
  }
}
