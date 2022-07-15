import { InjectionToken } from '@angular/core';

export interface ConfigurableCounterConfig {
  // How often the counter counts
  interval: number;
  // Where the counter starts
  start: number;
  // How much the counter increase
  step: number;
}

/**
 * Defaults will work like this
 */
export const defaultConfigurableCounterConfig: ConfigurableCounterConfig = {
  // this is configured in seconds
  interval: 1,
  start: 0,
  step: 1,
};

export const CONFIGURABLE_COUNTER_CONFIG =
  new InjectionToken<ConfigurableCounterConfig>(
    'yharaskrik-configurable-counter-config'
  );
