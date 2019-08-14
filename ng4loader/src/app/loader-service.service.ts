import { Injectable } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {

  constructor( private spinnerService: Ng4LoadingSpinnerService ) {
    // this.spinnerService.show();
   }
}
