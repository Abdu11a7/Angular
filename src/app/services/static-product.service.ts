import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductService {
  products: IProduct[];
  constructor() {
    this.products = [
      {
        id: ' 1',
        name: 'Book',
        price: 200,
        quantity: 10,
      },
      {
        id: ' 2',
        name: 'Pen',
        price: 100,
        quantity: 60,
      },
      {
        id: '3',
        name: 'Watch',
        price: 90,
        quantity: 40,
      },
    ];
  }

  getALLProducts(): IProduct[] {
    return this.products;
  }

  addNewProduct(product: any) {
    this.products.push(product);
  }

  //getProductByProduct()
  // edit
  // delete
}
