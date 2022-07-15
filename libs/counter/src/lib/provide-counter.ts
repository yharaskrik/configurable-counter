import {
  COUNTER_CONFIG,
  CounterConfig,
  defaultCounterConfig,
} from './counter.config';
import { Provider } from '@angular/core';
import { Counter } from './counter';

export function provideCounter(config?: Partial<CounterConfig>): Provider[] {
  return [
    {
      provide: COUNTER_CONFIG,
      useValue: {
        ...defaultCounterConfig,
        ...(config ?? {}),
      },
    },
    Counter,
  ];
}
