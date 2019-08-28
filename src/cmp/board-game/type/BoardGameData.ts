import { BoardData } from './BoardData';
import { CellPosition, AbstractMove, Board } from '../../../lib/board/Types';

export interface BoardGameData {
  board: Board
  boardData: BoardData
  movesHistory: {
    past: AbstractMove[]
    future: AbstractMove[]
  }
  selectedMarble: CellPosition | undefined
}
