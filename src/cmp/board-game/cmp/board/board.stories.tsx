import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { BoardCmp } from './board';
import { STANDARD_BOARD } from '../../../../lib/board/standardInitialBoard';
import { BoardGameFromBoardT } from '../../../../connectedCmp/board-game/data';
import { JestActionProvider } from '../../ctx/jestActionProvider';
import { Board, Cell } from '../../../../lib/board/Types';

export const _: Cell._Out = Cell._Out
export const X: Cell.Hole = Cell.Hole
export const O: Cell.Marble = Cell.Marble

storiesOf('cmp/board', module)
  .add(
    'all out empty board',
    () => {
      const board: Board = [
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
      ]
      const boardgame = BoardGameFromBoardT(board, [5, 3])
      return (
        <JestActionProvider>
          <BoardCmp {...{ board: boardgame.board }} />
        </JestActionProvider>
      )
    },
  )
  .add(
    'all holes board',
    () => {
      const board: Board = [
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
      ]
      const boardgame = BoardGameFromBoardT(board, [5, 3])
      return (
        <JestActionProvider>
          <BoardCmp {...{ board: boardgame.board }} />
        </JestActionProvider>
      )
    },
  )
  .add(
    'all holes 1 marble board',
    () => {
      const board: Board = [
        [O, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
      ]
      const boardgame = BoardGameFromBoardT(board, [5, 3])
      return (
        <JestActionProvider>
          <BoardCmp {...{ board: boardgame.board }} />
        </JestActionProvider>
      )
    },
  )
  .add(
    'initial without selection',
    () => {
      const boardgame = BoardGameFromBoardT(STANDARD_BOARD)
      return (
        <JestActionProvider>
          <BoardCmp {...{ board: boardgame.board }} />
        </JestActionProvider>
      )
    },
  )
  .add(
    'initial with selection',
    () => {
      const boardgame = BoardGameFromBoardT(STANDARD_BOARD, [5, 3])
      return (
        <JestActionProvider>
          <BoardCmp {...{ board: boardgame.board }} />
        </JestActionProvider>
      )
    },
  )