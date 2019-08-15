
export enum Slot {
  Marble = 'O',
  Hole = 'X',
  _Out = '_'
}
export type AxisPos = number
export type SlotPosition = [AxisPos, AxisPos]

export type O = Slot.Marble | Slot.Hole
export type _ = Slot._Out
export type Board = Slot[][]

export type DirTag = 'N' | 'E' | 'W' | 'S'
export type StepDirection = [0, 1 | -1] | [1 | -1, 0]
export type Directions = { [k in DirTag]: StepDirection }

export interface AbstractMove {
  from: SlotPosition
  direction: DirTag
}
export interface Move extends AbstractMove {
  eating: SlotPosition
  movingTo: SlotPosition
}

