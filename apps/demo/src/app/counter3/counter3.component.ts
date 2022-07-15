import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter, provideCounter } from '@yharaskrik/counter';

@Component({
  selector: 'configurable-counter-counter3',
  standalone: true,
  imports: [CommonModule],
  template: ` <div>counter3 works! {{ counter$ | async | number }}</div> `,
  styles: [],
  providers: [
    provideCounter({
      interval: 1000,
      step: 3,
      start: 0,
    }),
  ],
})
export class Counter3Component {
  readonly counter$ = this.counter.counter$;

  constructor(private counter: Counter) {}
}
