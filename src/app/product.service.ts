import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private https: HttpClient) { }

  getProducts() : Observable<Product[]> {
    let url ="http://localhost:3000/products"

    return this.https.get<Product[]>(url)
  }
}
