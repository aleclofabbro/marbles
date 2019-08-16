
export enum Cell {
  Marble = 'O',
  Hole = 'X',
  _Out = '_'
}
export type AxisPos = number
export type CellPosition = [AxisPos, AxisPos]

export type O = Cell.Marble | Cell.Hole
export type _ = Cell._Out
export type Board = Cell[][]

export type DirTag = 'N' | 'E' | 'W' | 'S'
export type StepDirection = [0, 1 | -1] | [1 | -1, 0]
export type Directions = { [k in DirTag]: StepDirection }

export interface AbstractMove {
  from: CellPosition
  direction: DirTag
}
export interface Move extends AbstractMove {
  eating: CellPosition
  movingTo: CellPosition
}

