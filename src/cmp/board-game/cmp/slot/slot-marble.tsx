import React, { useContext, useCallback } from 'react';
import './slot.css'
import marblepng from './marble.png'
import { SlotMarble } from '../../type/Slot';
import { MarbleCtx } from '../../ctx';
export const SlotMarbleCmp: React.FC<{ marble: SlotMarble }> = ({ marble }) => {
  const ctx = useContext(MarbleCtx)
  const clickHandler = useCallback(
    () => marble.canSelect && !marble.selected && ctx.selectMarble(marble.pos),
    [marble, ctx]
  )
  return (
    // <div className={`slot`}  >
    <div className={`hole`}  >
      <img
        className={`${!marble.selected && marble.canSelect ? `selectable ` : ``}${marble.selected ? `selected ` : ``}marble`}
        src={marblepng}
        onClick={clickHandler}
        alt={`marble ${marble.pos}`}
        draggable={false}
      ></img>
    </div>
    // </div >
  )
}