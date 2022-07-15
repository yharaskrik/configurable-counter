import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter, provideCounter } from '@yharaskrik/counter';

@Component({
  selector: 'configurable-counter-counter1',
  template: ` <div>Counter 1 works! {{ counter$ | async }}</div>`,
  styles: [``],
  providers: [
    provideCounter({
      interval: 1000,
      step: 1,
      start: 0,
    }),
  ],
  standalone: true,
  imports: [CommonModule],
})
export class Counter1Component {
  readonly counter$ = this.counter.counter$;

  constructor(private counter: Counter) {}
}
