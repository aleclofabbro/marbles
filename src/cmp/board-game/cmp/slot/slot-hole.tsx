import React, { useCallback, useContext } from 'react';
import './slot.css'
import { SlotHole } from '../../type/Slot';
// import { SlotOutCmp } from './slot-out';
import { HoleCtx } from '../../ctx';
export const SlotHoleCmp: React.FC<{ hole: SlotHole }> = ({ hole }) => {
  const ctx = useContext(HoleCtx)
  const clickHandler = useCallback(
    () => hole.validMoveDirection && ctx.moveHere(hole.validMoveDirection),
    [hole, ctx]
  )
  return (
    // <SlotOutCmp>
    <div
      className={`${hole.validMoveDirection ? `can-move-here ` : ``}hole`}
      onClick={clickHandler}
    ></div>
    // </SlotOutCmp>
  )
}