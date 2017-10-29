import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { AppConfig } from '../app.config';
import { CategoryModel } from '../models/category';

@Injectable()
export class CategoriesService {
 
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
  getCategories(): Observable<CategoryModel[]>
   {
 
     return this.http.get(this.config.apiUrl + '/categories/').map(this.extractData)
                           .catch(this.handleError);

  }
  getCategoriesByModule(name): Observable<CategoryModel[]>
   {
 
     return this.http.get(this.config.apiUrl + '/categories/module/'+name).map(this.extractData)
                           .catch(this.handleError);

  }
   createCategory(category: CategoryModel) {  
     const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(category);
   return this.http.post(this.config.apiUrl + '/categories/', body, options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
                         .subscribe();
   }
  updateCategory(category: CategoryModel) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(category);
    return this.http.put(this.config.apiUrl + '/categories/' + category._id, body, options ).map((res: Response) => res.json());
  }
  deleteCategory(category: CategoryModel) {
    return this.http.delete(this.config.apiUrl + '/categories/' + category._id);
  }
 
}