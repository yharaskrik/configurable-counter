import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter, provideCounter } from '@yharaskrik/counter';

@Component({
  selector: 'configurable-counter-counter2',
  template: ` <div>Counter 2 works! {{ counter$ | async | number }}</div>`,
  styles: [``],
  standalone: true,
  providers: [
    provideCounter({
      interval: 1000,
      step: 2,
      start: 0,
    }),
  ],
  imports: [CommonModule],
})
export class Counter2Component {
  readonly counter$ = this.counter.counter$;

  constructor(private counter: Counter) {}
}
