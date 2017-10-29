import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { AppConfig } from '../app.config';

@Injectable()
export class RulecancerService {

  constructor(private http:Http, private config: AppConfig) { }
 private extractData(res:Response) {
    let body = res.json();
    return body || [];
}
private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get® a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
}
  // Uses http.get() to load a single JSON file
  getrulecancer(): Observable<any[]>
   {

     return this.http.get(this.config.apiUrl + '/rulecancer/').map(this.extractData)
                           .catch(this.handleError);

  }
  getrulethyroid(): Observable<any[]>
  {

    return this.http.get(this.config.apiUrl + '/rulethyroid/').map(this.extractData)
      .catch(this.handleError);

  }
  getrulecancerByModule(name): Observable<any[]>
   {

     return this.http.get(this.config.apiUrl + '/rulecancer/module/'+name).map(this.extractData)
                           .catch(this.handleError);

  }
   createCategory(category: any) {
     const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(category);
   return this.http.post(this.config.apiUrl + '/rulecancer/', body, options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
                         .subscribe();
   }
  updateCategory(category: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(category);
    return this.http.put(this.config.apiUrl + '/rulecancer/' + category._id, body, options ).map((res: Response) => res.json());
  }
  deleteCancer(category: any) {
    return this.http.delete(this.config.apiUrl + '/rulecancer/' + category._id);
  }
  deleteThyroid(category: any) {
    return this.http.delete(this.config.apiUrl + '/rulethyroid/' + category._id);
  }
}
