import { abstractProxy } from './abstractProxy';

export const alertUnimplementedAction = <T>() => abstractProxy<T>(
  (prop) => (...args: any[]) => alert(
    `ALERT: 
    call to unimplemented action prop [${typeof prop}] :

    ${String(prop)}

    with arguments

    ${args.join(`,`)}
    `)
);

