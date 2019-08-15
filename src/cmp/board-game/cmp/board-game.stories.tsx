import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { BoardGameCmp } from './board-game';
import { STANDARD_BOARD } from '../../../lib/board/standardInitialBoard';
import { BoardGameFromBoardT } from '../../../connectedCmp/board-game/data';
import { JestActionProvider } from '../ctx/jestActionProvider';

storiesOf('cmp/board-game', module).add(
  'initial without selection',
  () => {
    const game = BoardGameFromBoardT(STANDARD_BOARD)
    return (
      <JestActionProvider >
        <BoardGameCmp {...{ game }} />
      </JestActionProvider>
    )
  },
);
storiesOf('cmp/board-game', module).add(
  'initial with selection',
  () => {
    const game = BoardGameFromBoardT(STANDARD_BOARD, [5, 3])
    return (
      <JestActionProvider>
        <BoardGameCmp {...{ game }} />
      </JestActionProvider>
    )
  },
);