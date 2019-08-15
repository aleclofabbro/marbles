import { Board } from './Board';
import { SlotMarble } from './Slot';
import { SlotPosition } from '../../../lib/board/Types';
import { STANDARD_BOARD } from '../../../lib/board/standardInitialBoard';
import { BoardGameFromBoardT } from '../../../connectedCmp/board-game/data';

export interface BoardGame {
  board: Board
  selectedMarble: SlotPosition | undefined
}
