import StrictEventEmitter from 'strict-event-emitter-types';
import { EventEmitter } from 'events';
import { Game, GameId } from '../Types';
import { AbstractMove, Board } from '../../board/Types';

export interface GameServiceEventMap {
  'game.evt.newGame': Game
  'game.evt.moveRequest': { move: AbstractMove, id: GameId }
  'game.evt.gameUpdateForMove': { move: AbstractMove, game: Game }
}

export type GameNotFound = null
export type GameMoveInvalid = null
export interface GameServiceCommands {
  newGame(_: { initialBoard?: Board }):
    Promise<Game>
  getGame(_: { id: GameId }):
    Promise<Game | null>
  move(_: { id: GameId, move: AbstractMove }):
    Promise<Game | GameNotFound | GameMoveInvalid>
}

export type GameServiceEvent = StrictEventEmitter<EventEmitter, GameServiceEventMap>
export interface GameService extends GameServiceCommands {
  evt: GameServiceEvent
}