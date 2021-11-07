import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductModel = new ProductModel();
  products: Array<any> = new Array();

  constructor(private product_service: ProductService) { }

  ngOnInit(): void {
    this.list_products();
  }

  list_products(){
    this.product_service.list_products().subscribe(products => {
      this.products = products;
    }, err => {
      console.log("Error listing products", err);
    })
  }

  add_product(){
    this.product_service.add_product(this.product).subscribe(product => {
      // cleaning inputs
      this.product = new ProductModel();

      // listing products
      this.list_products();
    }, err => {
      console.log("Error adding a product", err);
    })
  }

  update_product(id: number){
    const data = {
      id: id,
      name: this.product.name,
      price: this.product.price,
      is_available: this.product.is_available
    }
    this.product_service.update_product(data).subscribe(product => {
      // cleaning inputs
      this.product = new ProductModel();

      // listing products
      this.list_products();
    }, err => {
      console.log("Error updating product", err);
    })
  }

  delete_product(id: number){
    this.product_service.delete_product(id).subscribe(product => {
      // cleaning inputs
      this.product = new ProductModel();

      // listing products
      this.list_products();
    }, err => {
      console.log("Error deleting product", err);
    })
  }

}
