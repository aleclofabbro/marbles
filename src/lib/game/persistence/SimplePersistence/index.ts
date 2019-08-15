import * as lib from '../../../board'
import { STANDARD_BOARD } from '../../../board/standardInitialBoard';
import { Persistence, Game, GameId } from '../Types';
import { Board } from '../../../board/Types';

export interface SimplePersistenceStorage {
  newGame(_: { board: Board }): Promise<GameId>
  getBoard(_: { id: GameId }): Promise<Board | null>
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
      const currentBoard = await storage.getBoard({ id })
      if (!currentBoard) { return null }
      const board = lib.move(currentBoard)(absMove)
      if (!board) { return null }
      const game: Game = {
        id,
        board
      }
      storage.update({ game })
      return game
    }

  const newGame: Persistence['newGame'] = async ({ initialBoard = STANDARD_BOARD }) => {
    const nextValidMoves = lib.getAllValidMovesForBoard(initialBoard)
    const insertingGame = {
      board: initialBoard,
      nextValidMoves
    }
    const id = await storage.newGame(insertingGame)
    return {
      ...insertingGame,
      id
    }
  }

  return {
    move,
    newGame,
    get: storage.get
  }
} 