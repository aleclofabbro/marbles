import { Board, AbstractMove } from '../board/Types';

export type GameId = string
export interface Game {
  id: GameId
  initialBoard: Board
  moves: AbstractMove[]
  lastBoard: Board
}
