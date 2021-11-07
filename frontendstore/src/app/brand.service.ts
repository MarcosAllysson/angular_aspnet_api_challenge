import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { BrandModel } from "./brand/brand.model";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brand_endpoint = "http://localhost:5000/api/v1/brand/";

  constructor(private http: HttpClient) { }

  // Header
  http_options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  list_brands(): Observable<BrandModel[]>{
    return this.http.get<BrandModel[]>(this.brand_endpoint);
  }

  add_brand(brand: BrandModel): Observable<BrandModel>{
    return this.http.post<BrandModel>(this.brand_endpoint, brand, this.http_options);
  }

  update_brand(brand: BrandModel): Observable<BrandModel>{
    return this.http.put<BrandModel>(`${this.brand_endpoint}${brand.id}/`, brand, this.http_options);
  }

  delete_brand(id: any): Observable<BrandModel>{
    return this.http.delete<BrandModel>(`${this.brand_endpoint}${id}/`);
  }
}
