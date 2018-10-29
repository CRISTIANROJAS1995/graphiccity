import { Injectable } from '@angular/core';
import { ProductResponse } from '../../entities/sale/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductSelectService {

  private product: ProductResponse[] = [];

  constructor() {}

  getProduct() {
    return this.product;
  }

  addProduct( value: ProductResponse) {
    if (value != null || value !== undefined) {
      this.product.push(value);
    }
    return this.getProduct();
  }

  removeProduct() {
      this.product = [];
  }

}
