import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { AppConfig } from '../app.config';
import { ModalityModel } from '../models/index';

@Injectable()
export class ModalitiesService {
 
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
  getModalities(): Observable<ModalityModel[]>
   {
 
     return this.http.get(this.config.apiUrl + '/resources/modalities/').map(this.extractData)
                           .catch(this.handleError);
  }
   createModality(modality: ModalityModel) {  
     const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(modality);

 return this.http.post(this.config.apiUrl + '/resources/modalities/', body, options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
                         .subscribe();
   // return this.http.post(this.config.apiUrl + '/resources/modalities/', body, options ).map((res: Response) => res.json());
  }
  updateModality(modality: ModalityModel) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(modality);
    return this.http.put(this.config.apiUrl + '/resources/modalities/' + modality.name, body, options ).map((res: Response) => res.json());
  }
  deleteModality(modality: ModalityModel) {
    return this.http.delete(this.config.apiUrl + '/resources/modalities/' + modality.name);
  }
 
}