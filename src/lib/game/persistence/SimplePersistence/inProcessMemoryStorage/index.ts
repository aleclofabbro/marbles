import { SimplePersistenceStorage } from '..';
import { Game } from '../../../Types';

interface Config {
  games?: Record<string, Game>
}
const newId = () => Number(String(Math.random()).substr(2)).toString(36)
export function simple_in_mem_storage({ games = {} }: Config): SimplePersistenceStorage {

  const newGame: SimplePersistenceStorage['newGame'] = async ({ initialBoard }) => {
    const id = newId()
    const newGame: Game = {
      id,
      initialBoard,
      lastBoard: initialBoard,
      moves: []
    }
    games[id] = newGame
    return newGame
  }
  const get: SimplePersistenceStorage['get'] = async ({ id }) => games[id] || null
  const update: SimplePersistenceStorage['update'] = async ({ game }) => games[game.id] ? (games[game.id] = game, true) : false
  return {
    newGame,
    get,
    update
  }
} 