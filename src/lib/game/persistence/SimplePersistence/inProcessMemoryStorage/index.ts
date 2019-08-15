import { SimplePersistenceStorage } from '..';
import { Game } from '../../Types';

interface Config {
  games?: Record<string, Game>
}
const newId = () => Number(String(Math.random()).substr(2)).toString(36)
export function simple_in_mem_storage({ games = {} }: Config): SimplePersistenceStorage {



  const newGame: SimplePersistenceStorage['newGame'] = async ({ board }) => {
    const id = newId()
    games[id] = {
      id,
      board
    }
    return id
  }
  const get: SimplePersistenceStorage['get'] = async ({ id }) => games[id] || null
  const update: SimplePersistenceStorage['update'] = async ({ game }) => games[game.id] ? (games[game.id] = game, true) : false
  const getBoard: SimplePersistenceStorage['getBoard'] = async ({ id }) => {
    const game = await get({ id })
    return game && game.board
  }
  return {
    newGame,
    getBoard,
    get,
    update
  }
} 