import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FakeHttpService} from "./fake-http.service";
import {
  BehaviorSubject, catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter, finalize, iif,
  map, mergeMap,
  Observable, of,
  pairwise, pluck,
  scan, shareReplay,
  startWith,
  switchMap,
  tap, throwError, withLatestFrom
} from "rxjs";
import {IPayRate} from "./models/IPayRate";
import {IConvention} from "./models/IConvention";
import {IConvention2} from "./models/IConvention2";
import * as data from "./models/data";

/** @title Form field appearance variants */
@Component({
  selector: 'form-field-appearance-example',
  templateUrl: 'form-field-appearance-example.html',
  styleUrls:['style.css']
})
export class FormFieldAppearanceExample implements OnInit {

  formGroup: FormGroup
  formGroup2: FormGroup
  formGroup3: FormGroup

  conventions: IConvention[];
  payRates$: Observable<IPayRate[]>;
  initialPayRates: IPayRate[]
  initialPayRates$: Observable<IPayRate[]>;
  conventions$: Observable<IConvention2[]> = of([]);
  conventionsForAutoComplete$: Observable<IConvention2[]>;

  spinnerSubject = new BehaviorSubject(false);
  showSpinner$: Observable<boolean>;



  constructor(private readonly fakeHttpService: FakeHttpService) {}

  ngOnInit() {

    this.conventions = data.conventions;
    this.initialPayRates = data.payRates;
    this.initialPayRates$ = of(data.payRates);
    this.initFormGroups();
    this.initObservables();
  }

  initFormGroups() {
    this.formGroup = new FormGroup({
      payRate: new FormControl(),
      caption: new FormControl(),
      conv: new FormControl(),
      recours: new FormControl(),
    });

    this.formGroup2 = new FormGroup({
      isActive: new FormControl(),
      payMax: new FormControl(),
      code: new FormControl(),
    });

    //création
    this.formGroup3 = new FormGroup({
      payMax: new FormControl(),
      code: new FormControl(),
      conventions: new FormControl(),
    });

      //Edition
    // this.formGroup3 = new FormGroup({
    //   payMax: new FormControl(20),
    //   code: new FormControl('AAA'),
    //   conventions: new FormControl({
    //     id: 1,
    //     caption: 'Convention 1',
    //     code: 'C1',
    //     maxPay: 10
    //   }),
    // });
  }

  compareConventions(c1: IConvention, c2: IConvention): boolean {
    return c1 && c2 && c1.id === c2.id;
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  get caption(): FormControl {
    return this.formGroup.get('caption') as FormControl;
  }
  get payRate(): FormControl {
    return this.formGroup.get('payRate') as FormControl;
  }
  get conv(): FormControl {
    return this.formGroup.get('conv') as FormControl;
  }
  get recours(): FormControl {
    return this.formGroup.get('recours') as FormControl;
  }
  get isActive(): FormControl {
    return this.formGroup2.get('isActive') as FormControl;
  }
  get payMax(): FormControl {
    return this.formGroup2.get('payMax') as FormControl;
  }
  get code(): FormControl {
    return this.formGroup2.get('code') as FormControl;
  }
  get payMax2(): FormControl {
    return this.formGroup3.get('payMax') as FormControl;
  }
  get code2(): FormControl {
    return this.formGroup3.get('code') as FormControl;
  }
  get conv2(): FormControl {
    return this.formGroup3.get('conventions') as FormControl;
  }

  private initObservables() {
    //   this.caption.valueChanges
    //       .pipe(
    //           debounceTime(500),
    //           distinctUntilChanged(),
    //           map(lettre => lettre + lettre),
    //           tap(x => console.log(x)))
    //       .subscribe();
    //
    // this.conv.valueChanges.pipe(
    //     map(v => v.id),
    //     distinctUntilChanged(),
    //     tap(v => console.log(v))
    // ).subscribe();

    // this.payRate.valueChanges.pipe(
    //     startWith(15),
    //     debounceTime(500),
    //     distinctUntilChanged(),
    //     switchMap(maxPay => this.fakeHttpService.getAllPayRatesFilteredByMaxPay(maxPay)),
    //     startWith([]),
    //     tap(v => console.log(v)),
    //    )
    //     .subscribe();

    // this.conv.valueChanges.pipe(
    //     startWith({caption: 'vide'}),
    //     pairwise(),
    // ).subscribe(([prev, cur]) => {
    //   console.log(`prev: ${prev.caption}, curr: ${cur.caption}`);
    // });

    // this.payRate.valueChanges.pipe(
    //     scan((acc, cur) => {
    //       return acc + cur
    //     }, 0)
    // ).subscribe(v => console.log(v));

    // const payRateValue$ = this.payRate.valueChanges.pipe(debounceTime(200), distinctUntilChanged());

    // this.payRates$ = combineLatest([
    //   this.payMax.valueChanges.pipe(debounceTime(200), distinctUntilChanged(), startWith(this.payMax.value)),
    //     this.code.valueChanges.pipe(distinctUntilChanged(), startWith(this.payMax.value)),
    // ]).pipe(
    //     map(([payRate, code]) => {
    //       let value = [... this.initialPayRates];
    //       if(!!payRate) {
    //         value = value.filter(v => v.payRate <= payRate);
    //       }
    //       if(!!code) {
    //         value = value.filter(v => v.code.indexOf(code) !== -1);
    //       }
    //       return value;
    //     })
    // )

    // this.payRates$ = combineLatest([
    //   this.payMax.valueChanges.pipe(debounceTime(200), distinctUntilChanged(), startWith(this.payMax.value)),
    //   this.code.valueChanges.pipe(distinctUntilChanged(), startWith(this.code.value)),
    //   this.initialPayRates$
    // ]).pipe(
    //     map(([paymax, code, payRates]) => {
    //       if(!!paymax) {
    //         payRates = payRates.filter(v => v.payRate <= paymax);
    //       }
    //       if(!!code) {
    //         payRates = payRates.filter(v => v.code.indexOf(code) !== -1);
    //       }
    //       return payRates;
    //     })
    // )

    // this.payRates$ = combineLatest([
    //   this.payMax.valueChanges.pipe(distinctUntilChanged(), debounceTime(300), startWith(null)),
    //   this.code.valueChanges.pipe(distinctUntilChanged(), debounceTime(300), startWith(null))
    // ]).pipe(
    //     withLatestFrom(this.initialPayRates$),
    //     map(([[payMax, code], payRates]) => {
    //       if(!!payMax) {
    //         payRates = payRates.filter(v => v.payRate <= payMax);
    //       }
    //       if(!!code) {
    //         payRates = payRates.filter(v => v.code.indexOf(code) > -1);
    //       }
    //       return payRates;
    //     })
    // )

    // const payRatesFiltered$ = this.isActive.valueChanges.pipe(
    //     distinctUntilChanged(),
    //     switchMap(isActive => this.fakeHttpService.getAllPayRatesFilteredByAvailability(isActive))
    // );
    //
    // this.payRates$ = combineLatest([
    //   this.payMax.valueChanges.pipe(debounceTime(200), distinctUntilChanged(), startWith(this.payMax.value)),
    //   this.code.valueChanges.pipe(distinctUntilChanged(), startWith(this.code.value)),
    //   payRatesFiltered$
    // ]).pipe(
    //     map(([paymax, code, payRates]) => {
    //       if(!!paymax) {
    //         payRates = payRates.filter(v => v.payRate <= paymax);
    //       }
    //       if(!!code) {
    //         payRates = payRates.filter(v => v.code.indexOf(code) !== -1);
    //       }
    //       return payRates;
    //     })
    // )


    this.conventionsForAutoComplete$ = combineLatest([
      this.payMax2.valueChanges.pipe(distinctUntilChanged(), debounceTime(300)),
      this.code2.valueChanges.pipe(distinctUntilChanged())
    ]).pipe(
        filter(([payMax, code]) => !!payMax && !!code),
        tap(_ => this.spinnerSubject.next(true)),
        switchMap(([payMax, code]) => this.fakeHttpService.getConventions2(payMax, code)),
        tap(_ => this.spinnerSubject.next(false)),
        map(conventions => conventions.filter(c => c.year === 2022)),
        tap((conventions) => {
          if(!conventions || conventions.length === 0) {
            this.conv2.setValue(null);
          } else if (conventions.length === 1) {
            this.conv2.setValue(this.conventions[0]);
          } else if (!conventions.map(c => c.id).includes(this.conv2.value.id)){
            this.conv2.setValue(null);
          }
        }),
        shareReplay({bufferSize:1, refCount: true}),
    )

    this.fakeHttpService.getConventions2(10,'AAA').pipe(
        finalize(() => console.log('finalize'))
    ).subscribe();

    this.conventionsForAutoComplete$.pipe(
        pluck('code'),
    )

    this.showSpinner$ = this.spinnerSubject.asObservable();

    of(1, 2, 3, 4, 5)
        .pipe(
            switchMap(this.handleTest),
            finalize(() => console.log('finalize'))
        )
        .subscribe((x) => console.log(x));
  }


  handleTest = (x: any) => {
    return of(x).pipe(
        switchMap(y => iif(() => y === 3,
            throwError(new Error('error')),
            of(y*2)),
        ),
      catchError(err => of(err)),
    );
  }

  getCaption(convention: IConvention2) {
    return `${convention.caption}/(${convention.code}) - pay: ${convention.maxPay} - year: ${convention.year}`;
  }
}
