import { abstractProxy } from './abstractProxy';
import StrictEventEmitter from 'strict-event-emitter-types';
import { EventEmitter } from 'events';

type Emitter<T> = StrictEventEmitter<EventEmitter, T>
export const emitAction = <T extends { [key: string]: (...args: any[]) => any }>(emitter: Emitter<T>) => {
  return abstractProxy<T>(
    (prop) =>
      (...args: any) => `string` === typeof prop &&
        emitter.emit(prop, ...args))
}
