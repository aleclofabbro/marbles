import { Board } from './Board';
import { CellMarble } from './Cell';
import { CellPosition } from '../../../lib/board/Types';
import { STANDARD_BOARD } from '../../../lib/board/standardInitialBoard';
import { BoardGameFromBoardT } from '../../../connectedCmp/board-game/data';

export interface BoardGame {
  board: Board
  selectedMarble: CellPosition | undefined
}
