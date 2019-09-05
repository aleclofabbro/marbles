import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Cell } from '../../../../lib/board/Types';
import { JestActionProvider } from '../../../../ctx/board-game/jestActionProvider';
import { CellHoleCmp } from './cell-hole';
import { CellMarbleCmp } from './cell-marble';

const CellHolder: React.FC = ({ children }) =>
  //                                              rosybrown
  <div style={{ display: 'grid', backgroundColor: '#bc8f8f', width: '100px', height: '100px', padding: '10px' }}>
    {children}
  </div>

storiesOf('cmp/Cell', module).add(
  'hole can move',
  () => (
    <JestActionProvider>
      <CellHolder>
        <CellHoleCmp {...{ hole: { type: Cell.Hole, pos: [1, 2], validMoveDirection: 'E' } }} />
      </CellHolder>
    </JestActionProvider>
  ),
);
storiesOf('cmp/Cell', module).add(
  'hole can not move',
  () => (
    <JestActionProvider>
      <CellHolder>
        <CellHoleCmp {...{ hole: { type: Cell.Hole, pos: [1, 2], validMoveDirection: undefined } }} />
      </CellHolder>
    </JestActionProvider>
  ),
);
storiesOf('cmp/Cell', module).add(
  'marble seletable',
  () => (
    <JestActionProvider>
      <CellHolder>
        <CellMarbleCmp {...{ marble: { type: Cell.Marble, pos: [1, 2], selected: false, canSelect: true } }} />
      </CellHolder>
    </JestActionProvider>
  ),
);
storiesOf('cmp/Cell', module).add(
  'marble not seletable not selected',
  () => (
    <JestActionProvider>
      <CellHolder>
        <CellMarbleCmp {...{ marble: { type: Cell.Marble, pos: [1, 2], selected: false, canSelect: false } }} />
      </CellHolder>
    </JestActionProvider>
  ),
);
storiesOf('cmp/Cell', module).add(
  'marble not seletable, selected',
  () => (
    <JestActionProvider>
      <CellHolder>
        <CellMarbleCmp {...{ marble: { type: Cell.Marble, pos: [1, 2], selected: true, canSelect: true } }} />
      </CellHolder>
    </JestActionProvider>
  ),
);