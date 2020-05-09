import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { ProviderAst } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService]
})
export class ProductListComponent {

  productList: Product[] = []

  constructor(private productService: ProductService) { 
    this.getProducts();
  }
  getProducts = () => {
    this.productService.getProducts().subscribe(
      data => {
        this.productList = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}