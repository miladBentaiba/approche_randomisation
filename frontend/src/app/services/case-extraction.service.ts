import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { AppConfig } from '../app.config';

@Injectable()
export class CasecancerService {

  constructor(private http:Http, private config: AppConfig) { }
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
  // Uses http.get() to load a single JSON file
  getcasecancer(): Observable<any[]>
   {

     return this.http.get(this.config.apiUrl + '/casecancer/').map(this.extractData)
                           .catch(this.handleError);

  }
  getcasethyroid(): Observable<any[]>
  {

    return this.http.get(this.config.apiUrl + '/casethyroid/').map(this.extractData)
      .catch(this.handleError);

  }
  getcasecancerByModule(name): Observable<any[]>
   {

     return this.http.get(this.config.apiUrl + '/casecancer/module/'+name).map(this.extractData)
                           .catch(this.handleError);

  }
   createCancer(category: any) {
     const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(category);
  console.log("heeeeey " +body);
   return this.http.post(this.config.apiUrl + '/casecancer/', body, options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
                         .subscribe();
   }

  getCancerResolution(query: string): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http
      .get(this.config.apiUrl +  '/casecancer?' + query, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getThyroidResolution(query: string): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http
      .get(this.config.apiUrl +  '/casethyroid?' + query, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createThyroid(category: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(category);
    return this.http.post(this.config.apiUrl + '/casethyroid/', body, options) // ...using post request
      .map(res => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
      .subscribe();
  }
  updateCategory(category: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(category);
    return this.http.put(this.config.apiUrl + '/casecancer/' + category._id, body, options ).map((res: Response) => res.json());
  }
  deleteCancer(category: any) {
    return this.http.delete(this.config.apiUrl + '/casecancer/' + category._id);
  }
  deleteThyroid(category: any) {
    return this.http.delete(this.config.apiUrl + '/casethyroid/' + category._id);
  }
}
