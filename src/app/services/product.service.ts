import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})  

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl + '/productos/', {headers: this.httpHeaders});
  }
 
}