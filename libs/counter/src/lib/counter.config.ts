import { InjectionToken } from '@angular/core';

export interface CounterConfig {
  // milliseconds
  interval: number;
  start: number;
  step: number;
}

export const defaultCounterConfig: CounterConfig = {
  interval: 1000,
  start: 0,
  step: 1,
};

export const COUNTER_CONFIG = new InjectionToken<CounterConfig>(
  'counter-config'
);
