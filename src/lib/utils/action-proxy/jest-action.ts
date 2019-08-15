import { action, ActionOptions } from '@storybook/addon-actions';
import { abstractProxy } from './abstractProxy';

export const jestAction = <T>(options?: ActionOptions) => abstractProxy<T>(
  (prop) => action(`${String(prop)} [${typeof prop}]`, options)
);
