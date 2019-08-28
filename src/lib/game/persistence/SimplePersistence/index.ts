import * as lib from '../../../board'
import { STANDARD_BOARD } from '../../../board/standardInitialBoard';
import { Persistence } from '../Types';
import { Board } from '../../../board/Types';
import { GameId, Game } from '../../Types';

export interface SimplePersistenceStorage {
  newGame(_: { initialBoard: Board }): Promise<Game>
  get(_: { id: GameId }): Promise<Game | null>
  update(_: { game: Game }): Promise<boolean>
}

export interface Config {
  storage: SimplePersistenceStorage
}
export function simple_persistence({
  storage
}: Config): Persistence {

  const move: Persistence['move'] =
    async ({ id, move: absMove }) => {
      const storedGame = await storage.get({ id })
      if (!storedGame) { return null }
      const newBoard = lib.move(storedGame.lastBoard)(absMove)
      if (!newBoard) { return null }
      const game: Game = {
        ...storedGame,
        lastBoard: newBoard,
        moves: [absMove, ...storedGame.moves]
      }
      storage.update({ game })
      return game
    }

  const newGame: Persistence['newGame'] = async ({ initialBoard = STANDARD_BOARD }) => storage.newGame({ initialBoard })

  return {
    move,
    newGame,
    get: storage.get
  }
} 