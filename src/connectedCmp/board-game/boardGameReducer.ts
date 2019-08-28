import { history, moveHere, selectMarble, BoardDataFromBoard } from './reducerFunctions';
import { BoardGameData } from '../../cmp/board-game/type/BoardGameData';
import { useReducer } from 'react';
import { CellPosition, AbstractMove, DirTag, Board } from '../../lib/board/Types';
import { mappedReducer } from '../../lib/utils/reducers/reducerMap';

interface Action {
  moveHere: DirTag
  selectMarble: CellPosition
  history: boolean
}

export const reducer = mappedReducer<BoardGameData, Action>({
  history,
  moveHere,
  selectMarble
});

export const useBoardGameReducer = (board: Board, pastMoves: AbstractMove[] = []) =>
  useReducer(reducer, {
    board,
    boardData: BoardDataFromBoard(board),
    selectedMarble: undefined,
    movesHistory: {
      future: [],
      past: pastMoves
    }
  });