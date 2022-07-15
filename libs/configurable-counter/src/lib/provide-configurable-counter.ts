import type { ConfigurableCounterConfig } from './types';
import { Provider } from '@angular/core';
import {
  CONFIGURABLE_COUNTER_CONFIG,
  defaultConfigurableCounterConfig,
} from './types';
import { ConfigurableCounter } from './configurable-counter';

/**
 * This provides the config for our library to the app
 * @param config
 */
export function provideConfigurableCounter(
  config: Partial<ConfigurableCounterConfig>
): Provider[] {
  return [
    {
      provide: CONFIGURABLE_COUNTER_CONFIG,
      useValue: {
        ...defaultConfigurableCounterConfig,
        ...config,
      },
    },
    ConfigurableCounter,
  ];
}
