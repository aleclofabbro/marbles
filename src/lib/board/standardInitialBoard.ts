import { Cell, Board } from '../../lib/board/Types';

export const _: Cell._Out = Cell._Out
export const X: Cell.Hole = Cell.Hole
export const O: Cell.Marble = Cell.Marble
export const STANDARD_BOARD: Board = [
  [_, _, O, O, O, _, _],
  [_, _, O, O, O, _, _],
  [O, O, O, O, O, O, O],
  [O, O, O, X, O, O, O],
  [O, O, O, O, O, O, O],
  [_, _, O, O, O, _, _],
  [_, _, O, O, O, _, _]
]
