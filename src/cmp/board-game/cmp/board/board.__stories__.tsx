import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { BoardCmp } from './board';
import { STANDARD_BOARD } from '../../../../lib/board/standardInitialBoard';
import { BoardDataFromBoard } from '../../../../connectedCmp/board-game/reducerFunctions';
import { JestActionProvider } from '../../../../ctx/board-game/jestActionProvider';
import { Cell } from '../../../../lib/board/Types';

const _: Cell._Out = Cell._Out
const X: Cell.Hole = Cell.Hole
const O: Cell.Marble = Cell.Marble

storiesOf('cmp/board', module)
  .add(
    'all out empty board',
    () => {
      const boardt = [
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
      ]
      const board = BoardDataFromBoard(boardt, [5, 3])
      return (
        <JestActionProvider>
          <BoardCmp {...{ board }} />
        </JestActionProvider>
      )
    },
  )
  .add(
    'all holes board',
    () => {
      const boardt = [
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
      ]
      const board = BoardDataFromBoard(boardt, [5, 3])
      return (
        <JestActionProvider>
          <BoardCmp {...{ board }} />
        </JestActionProvider>
      )
    },
  )
  .add(
    'all holes 1 marble board',
    () => {
      const boardt = [
        [O, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
        [X, X, X, X, X, X, X,],
      ]
      const board = BoardDataFromBoard(boardt, [5, 3])
      return (
        <JestActionProvider>
          <BoardCmp {...{ board }} />
        </JestActionProvider>
      )
    },
  )
  .add(
    'initial without selection',
    () => {
      const board = BoardDataFromBoard(STANDARD_BOARD)
      return (
        <JestActionProvider>
          <BoardCmp {...{ board }} />
        </JestActionProvider>
      )
    },
  )
  .add(
    'initial with selection',
    () => {
      const board = BoardDataFromBoard(STANDARD_BOARD, [5, 3])
      return (
        <JestActionProvider>
          <BoardCmp {...{ board }} />
        </JestActionProvider>
      )
    },
  )