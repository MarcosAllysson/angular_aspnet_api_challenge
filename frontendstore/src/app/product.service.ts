import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product_endpoint = "http://localhost:5000/api/v1/product/";

  constructor(private http: HttpClient) { }

  // Headers
  http_options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  list_products(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.product_endpoint);
  }

  add_product(product: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>(this.product_endpoint, product, this.http_options);
  }

  update_product(product: ProductModel): Observable<ProductModel>{
    return this.http.put<ProductModel>(`${this.product_endpoint}${product.id}/`, product, this.http_options);
  }

  delete_product(id: any): Observable<ProductModel>{
    return this.http.delete<ProductModel>(`${this.product_endpoint}${id}/`);
  }
}
