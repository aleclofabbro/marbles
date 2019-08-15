import { Board as BoardT, Slot as SlotT, SlotPosition } from '../../lib/board/Types'
import * as lib from '../../lib/board'
import { BoardGame } from '../../cmp/board-game/type/BoardGame';
import { Slot, SlotMarble, SlotHole, SlotOut } from '../../cmp/board-game/type/Slot';

export const BoardGameFromBoardT = (boardt: BoardT, selectedMarble?: SlotPosition): BoardGame => {
  return {
    selectedMarble,
    board: {
      slots: boardt.map((row, nrow) => row.map((slotT, ncol) => SlotFromSlotT(boardt, slotT, [ncol, nrow], selectedMarble)))
    },
  }
}
export const SlotFromSlotT = (
  board: BoardT,
  slotT: SlotT,
  pos: SlotPosition,
  selectedPos?: SlotPosition,
): Slot => {
  if (lib.isMarble(slotT)) {
    const selected = !!selectedPos && lib.isSamePosition(pos, selectedPos)
    const slotMarble: SlotMarble = {
      type: slotT,
      pos,
      selected: selected,
      canSelect: selected || !!lib.validMovesFromPosition(board)(pos).length
    }
    return slotMarble
  } else if (lib.isHole(slotT)) {
    const slotMarble: SlotHole = {
      type: slotT,
      pos,
      validMoveDirection: selectedPos && lib.canMoveHere(board)(selectedPos, pos)
    }
    return slotMarble
  } else {
    const slotOut: SlotOut = { type: slotT, pos }
    return slotOut
  }
}
