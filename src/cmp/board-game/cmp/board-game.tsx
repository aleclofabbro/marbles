import React from 'react';
import { BoardGame } from '../type/BoardGame';
import { BoardCmp } from './board/board';

export const BoardGameCmp: React.FC<{ game: BoardGame }> = ({ game }) => {
  return (
    <div className={`board-game`}>
      <BoardCmp {...{ board: game.board }}></BoardCmp>
    </div>
  )
}