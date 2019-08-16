import { Cell as CellT, CellPosition, Move, DirTag } from '../../../lib/board/Types';
export interface AbsCell<S extends CellT> {
  type: S
  pos: CellPosition
}

export interface CellOut extends AbsCell<CellT._Out> {
}
export interface CellHole extends AbsCell<CellT.Hole> {
  validMoveDirection: DirTag | void
}
export interface CellMarble extends AbsCell<CellT.Marble> {
  selected: boolean
  canSelect: boolean
}
export type Cell =
  | CellOut
  | CellHole
  | CellMarble

