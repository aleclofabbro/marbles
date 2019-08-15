import React from 'react';
import './board.css'
import { Board } from '../../type/Board';
import { SlotMarbleCmp } from '../slot/slot-marble';
import { SlotHoleCmp } from '../slot/slot-hole';
import { Slot } from '../../../../lib/board/Types';

export const BoardCmp: React.FC<{ board: Board }> = ({ board }) => {
  return (
    <div className={`board`}>
      {
        board.slots.map((row/* , nrow */) =>
          row.map((slot/* , ncol */) =>
            <div
              className={`slot`}
              key={slot.pos.join(',')}
            /* style={{  gridColumn: ncol + 1, gridRow: nrow + 1   }} */
            >
              {
                slot.type == Slot._Out
                  ? null
                  : slot.type == Slot.Hole
                    ? <SlotHoleCmp {...{ hole: slot }}></SlotHoleCmp>
                    : <SlotMarbleCmp {...{ marble: slot }}></SlotMarbleCmp>
              }
            </div>

          )
        )
      }
    </div>
  )
}