import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Cell } from '../../../../lib/board/Types';
import { JestActionProvider } from '../../ctx/jestActionProvider';
import { CellHoleCmp } from './cell-hole';
import { CellMarbleCmp } from './cell-marble';

storiesOf('cmp/Cell', module).add(
  'hole can move',
  () => (
    <JestActionProvider>
      <CellHoleCmp {...{ hole: { type: Cell.Hole, pos: [1, 2], validMoveDirection: 'E' } }} />
    </JestActionProvider>
  ),
);
storiesOf('cmp/Cell', module).add(
  'hole can not move',
  () => (
    <JestActionProvider>
      <CellHoleCmp {...{ hole: { type: Cell.Hole, pos: [1, 2], validMoveDirection: undefined } }} />
    </JestActionProvider>
  ),
);
storiesOf('cmp/Cell', module).add(
  'marble seletable',
  () => (
    <JestActionProvider>
      <CellMarbleCmp {...{ marble: { type: Cell.Marble, pos: [1, 2], selected: false, canSelect: true } }} />
    </JestActionProvider>
  ),
);
storiesOf('cmp/Cell', module).add(
  'marble not seletable not selected',
  () => (
    <JestActionProvider>
      <CellMarbleCmp {...{ marble: { type: Cell.Marble, pos: [1, 2], selected: false, canSelect: false } }} />
    </JestActionProvider>
  ),
);
storiesOf('cmp/Cell', module).add(
  'marble not seletable, selected',
  () => (
    <JestActionProvider>
      <CellMarbleCmp {...{ marble: { type: Cell.Marble, pos: [1, 2], selected: true, canSelect: true } }} />
    </JestActionProvider>
  ),
);