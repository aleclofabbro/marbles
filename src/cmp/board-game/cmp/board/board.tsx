import React from 'react';
import './board.css'
import { Board } from '../../type/Board';
import { CellMarbleCmp } from '../cell/cell-marble';
import { CellHoleCmp } from '../cell/cell-hole';
import { Cell } from '../../../../lib/board/Types';

export const BoardCmp: React.FC<{ board: Board }> = ({ board }) => {
  return (
    <div className={`board`}>
      {
        board.cells.map((row, nrow) =>
          row.map((cell, ncol) =>
            <div
              className={`cell`}
              key={cell.pos.join(',')}
              style={{ gridColumn: ncol + 1, gridRow: nrow + 1 }}
            >
              {
                cell.type == Cell._Out
                  ? null
                  : cell.type == Cell.Hole
                    ? <CellHoleCmp {...{ hole: cell }}></CellHoleCmp>
                    : <CellMarbleCmp {...{ marble: cell }}></CellMarbleCmp>
              }
            </div>

          )
        )
      }
    </div>
  )
}