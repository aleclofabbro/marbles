import React from 'react';
import { storiesOf } from '@storybook/react';
import IndexCmp from '.';
import { STANDARD_BOARD } from '../../lib/board/standardInitialBoard';
import { Board, AbstractMove, Cell } from '../../lib/board/Types';

const _: Cell._Out = Cell._Out
const X: Cell.Hole = Cell.Hole
const O: Cell.Marble = Cell.Marble

storiesOf('cmp/board-game-index', module)
  .add(
    'start standard game',
    () => {
      return <IndexCmp {...{ board: STANDARD_BOARD, history: [] }} />
    },
  )
  .add(
    'start standard w/ hist',
    () => {
      const board: Board = [
        [_, _, O, O, O, _, _],
        [_, _, O, O, O, _, _],
        [O, O, O, O, O, O, O],
        [O, X, O, O, O, O, O],
        [O, O, X, O, O, O, O],
        [_, _, X, O, O, _, _],
        [_, _, O, O, O, _, _]
      ]
      const history: AbstractMove[] = [
        { from: [2, 5], direction: 'N' },
        { from: [1, 3], direction: 'E' },
      ]
      return <IndexCmp {...{ board: board, history }} />
    },
  );



// import React , { useEffect, useState }  from 'react';
// import { storiesOf } from '@storybook/react';
// import IndexCmp from '.';
// import { simple_factory } from '../../lib/game/service/simple';
// import { simple_in_mem_storage } from '../../lib/game/persistence/SimplePersistence/inProcessMemoryStorage';
// import { simple_persistence } from '../../lib/game/persistence/SimplePersistence';
// import { Game } from '../../lib/game/Types';


// storiesOf('cmp/board-game-index', module).add(
//   'game',
//   () => {
//     const service = simple_factory({ persistence: simple_persistence({ storage: simple_in_mem_storage({}) }) })
//     const Wrapper: React.FC = () => {
//       const [game, setGame] = useState<Game>()
//       useEffect(() => {
//         service.newGame({})
//           .then(setGame)
//       }, [])
//       return game ? <IndexCmp {...{ board: game.lastBoard, history: game.moves }} /> : null
//     }
//     return (

//       <Wrapper />
//     )
//   },
// );