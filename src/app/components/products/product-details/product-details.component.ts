import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RealProductsService } from '../../../services/real-products.service';
import { IProduct } from '../../../models/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId!: any;
  product!: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: RealProductsService
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => (this.product = response),
      error: (error) => error,
    });
  }
}
