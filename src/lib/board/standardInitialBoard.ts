import { Slot, Board } from '../../lib/board/Types';

export const _: Slot._Out = Slot._Out
export const X: Slot.Hole = Slot.Hole
export const O: Slot.Marble = Slot.Marble
export const STANDARD_BOARD: Board = [
  [_, _, O, O, O, _, _],
  [_, _, O, O, O, _, _],
  [O, O, O, O, O, O, O],
  [O, O, O, X, O, O, O],
  [O, O, O, O, O, O, O],
  [_, _, O, O, O, _, _],
  [_, _, O, O, O, _, _]
]
