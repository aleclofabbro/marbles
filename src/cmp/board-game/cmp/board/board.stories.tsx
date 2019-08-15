import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { BoardCmp } from './board';
import { STANDARD_BOARD } from '../../../../lib/board/standardInitialBoard';
import { BoardGameFromBoardT } from '../../../../connectedCmp/board-game/data';
import { JestActionProvider } from '../../ctx/jestActionProvider';


storiesOf('cmp/board', module).add(
  'initial without selection',
  () => {
    const boardgame = BoardGameFromBoardT(STANDARD_BOARD)
    return (
      <JestActionProvider>
        <BoardCmp {...{ board: boardgame.board }} />
      </JestActionProvider>
    )
  },
);
storiesOf('cmp/board', module).add(
  'initial with selection',
  () => {
    const boardgame = BoardGameFromBoardT(STANDARD_BOARD, [5, 3])
    return (
      <JestActionProvider>
        <BoardCmp {...{ board: boardgame.board }} />
      </JestActionProvider>
    )
  },
);