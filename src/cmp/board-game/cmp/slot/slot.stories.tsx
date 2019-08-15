import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Slot } from '../../../../lib/board/Types';
import { JestActionProvider } from '../../ctx/jestActionProvider';
import { SlotHoleCmp } from './slot-hole';
import { SlotMarbleCmp } from './slot-marble';

storiesOf('cmp/slot', module).add(
  'hole can move',
  () => (
    <JestActionProvider>
      <SlotHoleCmp {...{ hole: { type: Slot.Hole, pos: [1, 2], validMoveDirection: 'E' } }} />
    </JestActionProvider>
  ),
);
storiesOf('cmp/slot', module).add(
  'hole can not move',
  () => (
    <JestActionProvider>
      <SlotHoleCmp {...{ hole: { type: Slot.Hole, pos: [1, 2], validMoveDirection: undefined } }} />
    </JestActionProvider>
  ),
);
storiesOf('cmp/slot', module).add(
  'marble seletable',
  () => (
    <JestActionProvider>
      <SlotMarbleCmp {...{ marble: { type: Slot.Marble, pos: [1, 2], selected: false, canSelect: true } }} />
    </JestActionProvider>
  ),
);
storiesOf('cmp/slot', module).add(
  'marble not seletable not selected',
  () => (
    <JestActionProvider>
      <SlotMarbleCmp {...{ marble: { type: Slot.Marble, pos: [1, 2], selected: false, canSelect: false } }} />
    </JestActionProvider>
  ),
);
storiesOf('cmp/slot', module).add(
  'marble not seletable, selected',
  () => (
    <JestActionProvider>
      <SlotMarbleCmp {...{ marble: { type: Slot.Marble, pos: [1, 2], selected: true, canSelect: true } }} />
    </JestActionProvider>
  ),
);