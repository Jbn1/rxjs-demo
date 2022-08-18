import { Injectable } from '@angular/core';
import {debounceTime, delay, Observable, of, throwError} from "rxjs";
import {IPayRate} from "./models/IPayRate";
import {IConvention} from "./models/IConvention";
import {IConvention2} from "./models/IConvention2";
import * as data from './models/data';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {


  constructor() { }


  getAllPayRates(): Observable<IPayRate[]> {
    setTimeout(() => {
      console.log('fake http service pay rates');
    }, 100);
    return of(data.payRates);
  }

  getAllPayRatesFilteredByMaxPay(maxPay: number): Observable<IPayRate[]> {
    setTimeout(() => {
      console.log('fake http service pay rates');
    }, 100);
    return of(data.payRates.filter(p => p.payRate <= maxPay));
  }

  getAllPayRatesFilteredByAvailability(isEnabled: boolean): Observable<IPayRate[]> {
    setTimeout(() => {
      console.log('fake http service pay rates by availibility');
    }, 100);
    return of(data.payRates.filter(p => p.isEnabled === isEnabled));
  }

  getConventions2(payMax: number, code: string): Observable<IConvention2[]> {
    setTimeout(() => {
      console.log('fake http service conventions2');
    }, 2000);
    if(!payMax || !code) {
      return throwError('payMax and code are required');
    }

    return of(data.conventions2.filter(c => c.maxPay <= payMax && c.code === code)).pipe(delay(1000));
  }
}
