import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { RealProductsService } from '../../services/real-products.service';
import { Subscribable, Subscription } from 'rxjs';
import { ToNumberPipe } from './../../Pipes/pipe-name.pipe';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink, FormsModule, ToNumberPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnDestroy {
  size!: string;
  category!: string;
  products: IProduct[] = [];
  x!: Subscription;
  constructor(
    private productServices: RealProductsService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.x.unsubscribe();
  }

  ngOnInit(): void {
    this.x = this.productServices.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => console.log(error),
    });
  }

  deleteHandler(productId: string) {
    this.productServices.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product) => product.id != productId
        );
      },
    });
  }

  filterBy() {
    this.router.navigate(['/products'], {
      queryParams: { size: this.size, category: this.category },
    });
  }
}
