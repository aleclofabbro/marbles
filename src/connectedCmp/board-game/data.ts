import { Board as BoardT, Cell as CellT, CellPosition } from '../../lib/board/Types'
import * as lib from '../../lib/board'
import { BoardGame } from '../../cmp/board-game/type/BoardGame';
import { Cell, CellMarble, CellHole, CellOut } from '../../cmp/board-game/type/Cell';

export const BoardGameFromBoardT = (boardt: BoardT, selectedMarble?: CellPosition): BoardGame => {
  return {
    selectedMarble,
    board: {
      cells: boardt.map((row, nrow) => row.map((cellT, ncol) => CellFromCellT(boardt, cellT, [ncol, nrow], selectedMarble)))
    },
  }
}
export const CellFromCellT = (
  board: BoardT,
  cellT: CellT,
  pos: CellPosition,
  selectedPos?: CellPosition,
): Cell => {
  if (lib.isMarble(cellT)) {
    const selected = !!selectedPos && lib.isSamePosition(pos, selectedPos)
    const cellMarble: CellMarble = {
      type: cellT,
      pos,
      selected: selected,
      canSelect: selected || !!lib.validMovesFromPosition(board)(pos).length
    }
    return cellMarble
  } else if (lib.isHole(cellT)) {
    const cellMarble: CellHole = {
      type: cellT,
      pos,
      validMoveDirection: selectedPos && lib.canMoveHere(board)(selectedPos, pos)
    }
    return cellMarble
  } else {
    const cellOut: CellOut = { type: cellT, pos }
    return cellOut
  }
}
