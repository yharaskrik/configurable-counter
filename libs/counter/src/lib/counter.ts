import { inject, Injectable } from '@angular/core';
import { interval, map, Observable, startWith } from 'rxjs';
import { COUNTER_CONFIG } from '@yharaskrik/counter';

@Injectable()
export class Counter {
  private readonly counterConfig = inject(COUNTER_CONFIG);

  private step = this.counterConfig.step;

  private counter: number = this.counterConfig.start;

  readonly counter$: Observable<number> = interval(
    this.counterConfig.interval
  ).pipe(
    map(() => {
      this.counter += this.step;

      return this.counter;
    }),
    startWith(this.counterConfig.start)
  );

  setStep(step: number): void {
    this.step = step;
  }
}
