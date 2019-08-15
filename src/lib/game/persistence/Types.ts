import { Board, AbstractMove, Move } from '../../board/Types';

export type GameId = string
export interface Game {
  id: GameId,
  board: Board
}
export type GameNotFound = null
export interface Persistence {
  move(_: { id: GameId, move: AbstractMove }): Promise<Game | GameNotFound>,
  get(_: { id: GameId }): Promise<Game | GameNotFound>,
  newGame(_: { initialBoard?: Board }): Promise<Game>
}