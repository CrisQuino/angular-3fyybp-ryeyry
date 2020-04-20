import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse  } from 
'@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from 
'./http-error-handler.service';
import { Item } from './item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'authorizationToken'}
    )
};

@Injectable()
export class DataService {
  backendURL='https://okt0wa0uwg.execute-api.us-east-1.amazonaws.com/beta/products';
  private handleError: HandleError;
  items : Item[];

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('DataService');
  }

  getAllProducts()
  {
    this.getProduct()
      .subscribe(items => (this.items = items))
  }
  
  getProduct (): Observable<Item[]>{
     return this.http.get<Item[]>(this.backendURL,httpOptions);
  }
}