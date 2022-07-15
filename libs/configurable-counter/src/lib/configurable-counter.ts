import { inject, Inject, Injectable } from '@angular/core';
import { ConfigurableCounterConfig } from './types';
import { CONFIGURABLE_COUNTER_CONFIG } from './types';
import { interval, map, startWith } from 'rxjs';

@Injectable()
export class ConfigurableCounter {
  private readonly config = inject(CONFIGURABLE_COUNTER_CONFIG);

  private counter = this.config.start;

  readonly counter$ = interval(this.config.interval * 1000).pipe(
    map(() => {
      this.counter += this.config.step;

      return this.counter;
    }),
    startWith(this.config.start)
  );

  constructor() {
    console.log(this.config);
  }
}
