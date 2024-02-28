import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template: `
    <h3>Counter: {{ count }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent{

  public count: number =  0;

  increaseBy( value: number ): void{
    this.count += value;
  }

  resetCounter(): void{
    this.count = 0;
  }

}
