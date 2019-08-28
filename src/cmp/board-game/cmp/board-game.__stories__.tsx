import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { BoardGameCmp } from './board-game';
import { STANDARD_BOARD } from '../../../lib/board/standardInitialBoard';
import { BoardDataFromBoard } from '../../../connectedCmp/board-game/reducerFunctions';
import { JestActionProvider } from '../../../ctx/board-game/jestActionProvider';

storiesOf('cmp/board-game', module).add(
  'initial without selection',
  () => {
    const board = BoardDataFromBoard(STANDARD_BOARD)
    return (
      <JestActionProvider >
        <BoardGameCmp {...{ board }} />
      </JestActionProvider>
    )
  },
);
storiesOf('cmp/board-game', module).add(
  'initial with selection',
  () => {
    const board = BoardDataFromBoard(STANDARD_BOARD, [1, 3])
    return (
      <JestActionProvider>
        <BoardGameCmp {...{ board }} />
      </JestActionProvider>
    )
  },
);