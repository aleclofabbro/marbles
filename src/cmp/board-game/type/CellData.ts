import { Cell as CellT, CellPosition, Move, DirTag } from '../../../lib/board/Types';
interface AbstrCell<S extends CellT> {
  type: S
  pos: CellPosition
}

export interface CellOut extends AbstrCell<CellT._Out> {
}
export interface CellHole extends AbstrCell<CellT.Hole> {
  validMoveDirection: DirTag | void
}
export interface CellMarble extends AbstrCell<CellT.Marble> {
  selected: boolean
  canSelect: boolean
}
export type CellData =
  | CellOut
  | CellHole
  | CellMarble

