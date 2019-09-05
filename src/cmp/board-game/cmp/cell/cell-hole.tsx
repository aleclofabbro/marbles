import React, { useCallback, useContext } from 'react';
import './cell.css'
import { CellHole } from '../../type/CellData';
import { HoleCtx } from '../../../../ctx/board-game';
export const CellHoleCmp: React.FC<{ hole: CellHole }> = ({ hole }) => {
  const ctx = useContext(HoleCtx)
  const clickHandler = useCallback(
    () => hole.validMoveDirection && ctx.moveHere(hole.validMoveDirection),
    [hole, ctx]
  )
  return (
    <div
      className={`${hole.validMoveDirection ? `can-move-here ` : ``}hole`}
      onClick={clickHandler}
    >
    </div>
  )
}