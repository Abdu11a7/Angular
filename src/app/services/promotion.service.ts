import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  ads: string[] = [
    'White Friday, Buy One Get One',
    'Up to 50%',
    '',
    'Free Ticket',
    'up to 20%',
  ];
  constructor() {}
  // myFun
  getCurrentAd(): Observable<string> {
    let observable = new Observable<string>((observer) => {
      let count = 0;
      let myInterval = setInterval(() => {
        observer.next(this.ads[count++]);
        if (count == this.ads.length) {
          observer.complete();
        }
        if (this.ads[count] == '') {
          observer.error('Empty Add');
        }
      }, 2000);
      // end of obervable object
      return {
        // call onDestroy
        // completed
        // error
        unsubscribe() {
          console.log('unsubscribe');
          clearInterval(myInterval);
        },
      };
    });

    return observable;
  }
}
