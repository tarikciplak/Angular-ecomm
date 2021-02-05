import { Product, ProductResponse } from './../components/product/product';

import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = environment.SERVER_URL;


  constructor(private http: HttpClient) { }

  // Backend serverdan ürün isteme //
  getAllProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.url + '/products');
  }

  // Tekil ürün isteme //
  getSingleProduct(id: number): any {
    return this.http.get<any>(this.url + '/products/' + id);
  }
  // Category Filtresi //
  getProductsFromCategory(catName: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.url + '/products/category/' + catName);

  }
  
}


