import { Board, AbstractMove } from '../../board/Types';
import { GameId, Game } from '../Types';

export type GameNotFound = null
export interface Persistence {
  move(_: { id: GameId, move: AbstractMove }): Promise<Game | GameNotFound>
  get(_: { id: GameId }): Promise<Game | GameNotFound>
  newGame(_: { initialBoard?: Board }): Promise<Game>
}