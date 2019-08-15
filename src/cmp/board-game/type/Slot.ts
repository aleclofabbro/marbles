import { Slot as SlotT, SlotPosition, Move, DirTag } from '../../../lib/board/Types';
export interface AbsSlot<S extends SlotT> {
  type: S
  pos: SlotPosition
}

export interface SlotOut extends AbsSlot<SlotT._Out> {
}
export interface SlotHole extends AbsSlot<SlotT.Hole> {
  validMoveDirection: DirTag | void
}
export interface SlotMarble extends AbsSlot<SlotT.Marble> {
  selected: boolean
  canSelect: boolean
}
export type Slot =
  | SlotOut
  | SlotHole
  | SlotMarble

