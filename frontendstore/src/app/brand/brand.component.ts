import { Component, OnInit } from '@angular/core';
import { BrandService } from "../brand.service";
import { BrandModel } from "./brand.model";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand: BrandModel = new BrandModel();
  brands: Array<any> = [];

  constructor(private brand_service: BrandService) { }

  ngOnInit(): void {
    this.list_brands();
  }

  list_brands(){
    this.brand_service.list_brands().subscribe( brands => {
      this.brands = brands;
    }, err => {
      console.log("Error listing brands", err)
    })
  }

  add_brand(){
    this.brand_service.add_brand(this.brand).subscribe(brand => {
      // cleaning inputs
      this.brand = new BrandModel();

      // listing brands
      this.list_brands();
    }, err => {
      console.log("Error adding a brand", err);
    })
  }

  update_brand(id: number){
    const data = {
      id: id,
      name: this.brand.name,
      category: this.brand.category,
      location: this.brand.location
    }
    this.brand_service.update_brand(data).subscribe(brand => {
      // cleaning inputs
      this.brand = new BrandModel();

      // listing brands
      this.list_brands();
    }, err => {
      console.log("Error updating brand", err);
    })
  }

  delete_brand(id: number){
    this.brand_service.delete_brand(id).subscribe(brand => {
      // cleaning inputs
      this.brand = new BrandModel();

      // listing brands
      this.list_brands();
    }, err => {
      console.log("Error deleting brand", err);
    })
  }

}
