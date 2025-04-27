import { Component, OnDestroy, OnInit } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentAd!: string;
  firstObservable!: Subscription;
  constructor(private promotionService: PromotionService) {}
  ngOnDestroy(): void {
    this.firstObservable.unsubscribe();
  }

  ngOnInit(): void {
    this.firstObservable = this.promotionService.getCurrentAd().subscribe({
      next: (response) => {
        console.log(response);
        this.currentAd = response;
      },
      error: (error) => {
        console.log('Home Component ', error);
      },
    });
  }
}
