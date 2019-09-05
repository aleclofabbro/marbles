import React from 'react';
import { MarbleCtx, HoleCtx, MainCtxT } from '../../ctx/board-game';
import { BoardGameCmp } from '../../cmp/board-game/cmp/board-game';
import { useBoardGameReducer } from './boardGameReducer';
import { Board, AbstractMove } from '../../lib/board/Types';

const IndexCmp: React.FC<{ board: Board, history?: AbstractMove[] }> =
  ({ board, history }) => {
    const [state, dispatch] = useBoardGameReducer(board, history)
    const mainCtx: MainCtxT = {
      selectMarble: pos => dispatch({ a: 'selectMarble', p: pos }),
      moveHere: direction => dispatch({ a: 'moveHere', p: direction }),
      history: back => dispatch({ a: 'history', p: back })
    }

    return (
      <MarbleCtx.Provider value={mainCtx}>
        <HoleCtx.Provider value={mainCtx}>

          <button
            disabled={!state.movesHistory.past.length}
            onClick={() => mainCtx.history(true)}
          >&lt;---({state.movesHistory.past.length})</button>
          <button
            disabled={!state.movesHistory.future.length}
            onClick={() => mainCtx.history(false)}
          >---&gt;({state.movesHistory.future.length})</button>

          <BoardGameCmp board={state.boardData}></BoardGameCmp>
        </HoleCtx.Provider>
      </MarbleCtx.Provider>
    )
  }

export default IndexCmp;
