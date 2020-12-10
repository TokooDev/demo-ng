import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private  http: HttpClient, private router: Router) { }
  public baseurl = 'https://127.0.0.1:8000/api';
  public nameAutorization = 'fil_rouge';
  public localStorage  = window.localStorage;
  login(credentials: any){
    return this.http.post(`${this.baseurl}/login_check`, credentials);
}
 getToken(credentials: any){
   this.login(credentials).subscribe(
     token => {
       localStorage.setItem('token', token.token);
     },
     httpError => console.log(httpError.error.message)
   );
}
decodeToken(){
  return  this.localStorage.getItem('token') ? jwt_decode(this.localStorage.getItem('token')) : null;
  }
  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_ADMIN': {
        this.router.navigate(['admin']);
        this.localStorage.setItem('token', null) ;
        break;
      }
      case 'ROLE_FORMATEUR': {
        this.router.navigate(['formateur']);
        this.localStorage.setItem('token', null) ;
        break;
      }
      case 'ROLE_APPRENANT': {
        this.localStorage.setItem('token', null) ;
        this.router.navigate(['apprenant']);
        break;
      } case 'ROLE_CM': {
        this.localStorage.setItem('token', null) ;
        this.router.navigate(['cm']);
        break;
      }
      default: {
        this.router.navigate(['']);
        break;
      }
    }
  }






}
