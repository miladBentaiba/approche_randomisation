import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/user';
import { AppConfig } from '../app.config';
@Injectable()
export class AuthenticationService {
  constructor(private http: Http, private config: AppConfig) { }
  public user:User;
  public cancer:boolean=false;
 login(email: string, password: string) {
    return this.http.post(this.config.apiUrl + '/users/login', { email: email, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        this.user = response.json();
                console.log('i am logging an email '+this.user.email);

        if (this.user && this.user.token) {
           // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(this.user.token));
          localStorage.setItem('currentUserEmail',this.user.email);


        }
      });
  }

 public getUser():User
 {

   return this.user;
 }
  public setCancer(t:boolean)
  {

     this.cancer=t;
  }
  public getCancer():boolean
  {

    return this.cancer;
  }

  public logout() {
    // remove user from local storage to log user out
            console.log('i am logging out');

    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserEmail');


  }
   public getEmail():String
  {

    if( localStorage.getItem('currentUser')==null)
    {

      return localStorage.getItem('currentUserEmail');
    }
    else
    {
      //console.log('i am testing email '+ localStorage.getItem('currentUserEmail'));


      return localStorage.getItem('currentUserEmail');
    }
  }
 public isLogged():boolean
  {

    if( localStorage.getItem('currentUser')==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }


}
