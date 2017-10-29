import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
 import { AppConfig } from '../app.config';
import { DatabsModel } from '../models/database';
import {Observable, BehaviorSubject} from 'rxjs/Rx'
import { AuthenticationService } from './authentication.service';

@Injectable()
 
export class DatabasesService {
 
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
  // Uses http.get() to load a single JSON file
  getDatabases(): Observable<DatabsModel[]>
   {
 
     return this.http.get(this.config.apiUrl + '/resources/databases/user/'+this.authenticationService.getEmail()).map(this.extractData);
}

getDatabase(id): Observable<any>
   {
 
     return this.http.get(this.config.apiUrl + '/resources/databases/'+id).map(this.extractData);
}

 getDatabasesByModality(modality:String): Observable<DatabsModel[]>
   { 
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.config.apiUrl + '/resources/databases/modality/'+modality).map(this.extractData);
}
     uploadDatabase(filesToUpload: Array<File>,name:String) {  
       
   }
    makeFileRequest(url: string, params: Array<string>, files: Array<File>,name:String) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("name",name);

            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                       // resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
   createDatabase(database: DatabsModel,files: Array<File>) {  
       const headers = new Headers({ 'Content-Type': 'application/json' });
     const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(database);
             return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("database",body);

            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                    // send( body, options);

                       // resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", this.config.apiUrl + '/resources/databases/upload', true);
            xhr.send(formData);
        });
    
 
      
    
   }
   send( body, options)
   {
       this.http.post(this.config.apiUrl + '/resources/databases/', body, options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
                         .subscribe();
   }
  updateDatabase(database: DatabsModel) {
 
 const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
     
    const body = JSON.stringify(database);
    return this.http.put(this.config.apiUrl + '/resources/databases/'  + database._id,options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
                         .subscribe();
  }
  deleteDatabase(database: DatabsModel):Observable<any> {
   
 const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
     
    const body = JSON.stringify(database);
    return this.http.delete(this.config.apiUrl + '/resources/databases/'  + database._id,options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
}