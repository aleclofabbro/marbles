import React from 'react';
import { useEffect, useState } from 'react';
import { GameService } from '../../lib/game/service/Types';
import { GameId, Game } from '../../lib/game/persistence/Types';
import { MarbleCtx, HoleCtx, MainCtxT } from '../../cmp/board-game/ctx';
import { BoardGameFromBoardT } from './data';
import { CellPosition } from '../../lib/board/Types';
import { BoardGameCmp } from '../../cmp/board-game/cmp/board-game';

const IndexCmp: React.FC<{ service: GameService, gameId: GameId }> = ({ gameId, service }) => {
  const [selectedMarble, setSelectedMarble] = useState<CellPosition>()
  const [game, setGame] = useState<Game | null>(null)
  useEffect(() => {
    service.getGame({ id: gameId })
      .then(game => {
        if (game) {
          setGame(game)
        } else { }
      })

  }, [gameId, service, setGame, selectedMarble])
  const mainCtx: MainCtxT = {
    selectMarble: setSelectedMarble,
    moveHere: direction => {
      selectedMarble && service.move({ id: gameId, move: { direction, from: selectedMarble } }).then(setGame)
    }
  }

  return (
    <MarbleCtx.Provider value={mainCtx}>
      <HoleCtx.Provider value={mainCtx}>
        {game && <BoardGameCmp game={BoardGameFromBoardT(game.board, selectedMarble)}></BoardGameCmp>}
      </HoleCtx.Provider>
    </MarbleCtx.Provider>
  )
}
export default IndexCmp;