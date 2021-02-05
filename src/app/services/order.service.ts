
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../components/product/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  products: Product[] = [];
  private url = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  
  getSingleOrder(orderId: number) {
    return this.http.get<ProductResponseModel[]>(`${this.url}/orders/${orderId}`).toPromise();
  }
}

interface ProductResponseModel {
  id: number;
  title: string;
  description: string;
  price: number;
  quantityOrdered: number;
  image: string;
}








