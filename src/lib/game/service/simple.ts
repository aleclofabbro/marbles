import { Persistence } from '../persistence/Types';
import { GameServiceCommands, GameServiceEvent, GameService } from './Types';
import { EventEmitter } from 'events';

export interface Config { persistence: Persistence }
export const simple_factory = ({ persistence }: Config): GameService => {
  const evt: GameServiceEvent = new EventEmitter()

  const move: GameServiceCommands['move'] = async (_) => {
    evt.emit('game.evt.moveRequest', _)
    const maybeGame = await persistence.move(_)
    maybeGame && evt.emit('game.evt.gameUpdateForMove', { move: _.move, game: maybeGame })
    return maybeGame
  }

  const newGame: GameServiceCommands['newGame'] = async (_) => {
    const game = await persistence.newGame(_)
    evt.emit('game.evt.newGame', game)
    return game
  }

  const getGame: GameServiceCommands['getGame'] = async (_) => await persistence.get(_)

  const cmd: GameServiceCommands = {
    move,
    newGame,
    getGame
  }

  return {
    ...cmd,
    evt
  }
};