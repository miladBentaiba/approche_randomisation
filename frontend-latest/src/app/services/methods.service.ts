import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { AppConfig } from '../app.config';
import { MethodModel } from '../models/method';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class MethodsService {
   constructor(private http:Http, private config: AppConfig,private authenticationService:AuthenticationService) { }
 private extractData(res:Response) {
    let body = res.json();
    return body || [];
}
private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
}
 getKeys(): Observable<any[]>
   {
 return   this.http.get(this.config.apiUrl + '/keywords').map(this.extractData).catch(this.handleError);
}
  // Uses http.get() to load a single JSON file
  getMethods(): Observable<MethodModel[]>
   {
 return   this.http.get(this.config.apiUrl + '/methods/user/'+this.authenticationService.getEmail()).map(this.extractData);//.catch(this.handleError);
}
  getMethodsByCategory(category: string): Observable<MethodModel[]>
   {
console.log("heyyyyyy" );
return   this.http.get(this.config.apiUrl + '/methods/category/'+category).map(this.extractData).catch(this.handleError);
}
   createMethod(method: MethodModel) {  
     const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
     
    const body = JSON.stringify(method);
 return this.http.post(this.config.apiUrl + '/methods/', body, options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
                         .subscribe();
   }
  updateMethod(method: MethodModel) {
  
   const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
             method.url=  './uploads/methods/'+method.createdBy+'/'+method.module+'/'+method.category+'/'+method.name+'.m';

    const body = JSON.stringify(method);
    return this.http.put(this.config.apiUrl + '/methods/' + method._id,method,options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .subscribe();
  }
  deleteMethod(method: MethodModel): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
     
    const body = JSON.stringify(method);
    return this.http.delete(this.config.apiUrl + '/methods/' + method._id,options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if
  }
 
}