import * as lib from '.'
import { STANDARD_BOARD } from './standardInitialBoard'
import { Move, Cell } from './Types';

const { Marble: O, Hole: X, _Out: _ } = Cell

describe(`lib \n${STANDARD_BOARD.map(_ => _.join(`|`)).join('\n')}`, () => {
  test('valid moves [5, 3]', () => {
    const expected: Move[] = [{
      from: [5, 3],
      direction: 'W',
      eating: [4, 3],
      movingTo: [3, 3]
    }]

    const validMoves = lib.validMovesFromPosition(STANDARD_BOARD)([5, 3])
    expect(validMoves).toEqual(expected);
  })
  test('valid moves [1, 3]', () => {
    const expected: Move[] = [{
      from: [1, 3],
      direction: 'E',
      eating: [2, 3],
      movingTo: [3, 3]
    }]

    const validMoves = lib.validMovesFromPosition(STANDARD_BOARD)([1, 3])
    expect(validMoves).toEqual(expected);
  })

  test('valid moves [3, 5]', () => {
    const expected: Move[] = [{
      from: [3, 5],
      direction: 'N',
      eating: [3, 4],
      movingTo: [3, 3]
    }]

    const validMoves = lib.validMovesFromPosition(STANDARD_BOARD)([3, 5])
    expect(validMoves).toEqual(expected);
  })
  test('valid moves [3, 1]', () => {
    const expected: Move[] = [{
      from: [3, 1],
      direction: 'S',
      eating: [3, 2],
      movingTo: [3, 3]
    }]

    const validMoves = lib.validMovesFromPosition(STANDARD_BOARD)([3, 1])
    expect(validMoves).toEqual(expected);
  })

  test('valid moves [0, 0]', () => {
    const expected: Move[] = []
    const validMoves = lib.validMovesFromPosition(STANDARD_BOARD)([0, 0])
    expect(validMoves).toEqual(expected);
  })

  test('valid moves [3, 2]', () => {
    const expected: Move[] = []
    const validMoves = lib.validMovesFromPosition(STANDARD_BOARD)([3, 2])
    expect(validMoves).toEqual(expected);
  })

  test('moves [3, 1] -> D', () => {
    const expected = [
      [_, _, O, O, O, _, _],
      [_, _, O, X, O, _, _],
      [O, O, O, X, O, O, O],
      [O, O, O, O, O, O, O],
      [O, O, O, O, O, O, O],
      [_, _, O, O, O, _, _],
      [_, _, O, O, O, _, _]
    ]
    const validMoves = lib.move(STANDARD_BOARD)({ from: [3, 1], direction: 'S' })
    expect(validMoves).toEqual(expected);
  })

  test('moves [3, 1] -> L', () => {
    const expected = null
    const validMoves = lib.move(STANDARD_BOARD)({ from: [3, 1], direction: 'W' })
    expect(validMoves).toEqual(expected);
  })

  test('getAllValidMovesForBoard', () => {
    const expected: Move[] = [
      { "direction": "S", "eating": [3, 2], "from": [3, 1], "movingTo": [3, 3] },
      { "direction": "E", "eating": [2, 3], "from": [1, 3], "movingTo": [3, 3] },
      { "direction": "W", "eating": [4, 3], "from": [5, 3], "movingTo": [3, 3] },
      { "direction": "N", "eating": [3, 4], "from": [3, 5], "movingTo": [3, 3] }
    ]
    const validMoves = lib.getAllValidMovesForBoard(STANDARD_BOARD)
    expect(validMoves).toEqual(expected);
  })


  test('backmoves  [ InitialBoard -> moves ( [3, 1] -> D) ] back -> initialBoard', () => {
    const fromBoard = [
      [_, _, O, O, O, _, _],
      [_, _, O, X, O, _, _],
      [O, O, O, X, O, O, O],
      [O, O, O, O, O, O, O],
      [O, O, O, O, O, O, O],
      [_, _, O, O, O, _, _],
      [_, _, O, O, O, _, _]
    ]
    const validMoves = lib.moveBack(fromBoard)({ from: [3, 1], direction: 'S' })
    expect(validMoves).toEqual(STANDARD_BOARD);
  })


})