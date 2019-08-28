import React from 'react';
import { BoardData } from '../type/BoardData';
import { BoardCmp } from './board/board';

export const BoardGameCmp: React.FC<{ board: BoardData }> = ({ board }) => {
  return (
    <div className={`board-game`}>
      <BoardCmp {...{ board }}></BoardCmp>
    </div>
  )
}