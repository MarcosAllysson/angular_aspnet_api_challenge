import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';

import { ProductService } from './product.service';
import { BrandService } from "./brand.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    BrandService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
