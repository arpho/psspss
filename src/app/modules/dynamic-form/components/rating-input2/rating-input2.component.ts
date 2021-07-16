import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'rating-input2',
  templateUrl: './rating-input2.component.html',
  styleUrls: ['./rating-input2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInput2Component),
      multi: true
    }
  ]
})
export class RatingInput2Component implements OnInit,ControlValueAccessor {
  // Function to call when the rating changes.
  onChange = (rating: number) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};


  constructor() {

    console.log('cisono')
   }
  writeValue(rating:number): void {
    this.stars = this.stars.map((_, i) => rating > i);
    this.onChange(this.value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
    console.log('changed rating')
    this.onChange(4) // 4 just to debug
  }
  registerOnTouched(fn: any): void {
    console.log('touch')
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {}

  stars: boolean[] = Array(5).fill(false);

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }

  rate(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
    this.onChange(this.value)
  }

}
