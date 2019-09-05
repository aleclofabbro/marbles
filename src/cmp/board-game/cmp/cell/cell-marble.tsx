import React, { useContext, useCallback } from 'react';
import './cell.css'
import { CellMarble } from '../../type/CellData';
import { MarbleCtx } from '../../../../ctx/board-game';
export const CellMarbleCmp: React.FC<{ marble: CellMarble }> = ({ marble }) => {
  const ctx = useContext(MarbleCtx)
  const clickHandler = useCallback(
    () => marble.canSelect && !marble.selected && ctx.selectMarble(marble.pos),
    [marble, ctx]
  )
  return (
    <div className={`hole`}  >
      <div
        className={`${!marble.selected && marble.canSelect ? `selectable ` : ``}${marble.selected ? `selected ` : ``}marble`}
        onClick={clickHandler}
        draggable={false}
      >
      </div>
    </div>
  )
}

