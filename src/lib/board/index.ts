import { CellPosition, Cell, DirTag, Directions, Board, StepDirection, Move, AbstractMove } from './Types';

export const isMarble = (_: Cell): _ is Cell.Marble => _ === Cell.Marble
export const isHole = (_: Cell): _ is Cell.Hole => _ === Cell.Hole
export const isOut = (_: Cell): _ is Cell._Out => _ === Cell._Out


export const DIRTAGS: DirTag[] = ['N', 'E', 'W', 'S']
export const DIRECTIONS: Directions = {
  N: [0, -1],
  E: [1, 0],
  W: [-1, 0],
  S: [0, 1]
}

export const isSamePosition = (pos1: CellPosition, pos2: CellPosition) => pos1[1] === pos2[1] && pos1[0] === pos2[0]

export const getCell = (board: Board) => ([x, y]: CellPosition) =>
  (x < 0 || y < 0 || y >= board.length || x >= board[0].length)
    ? Cell._Out
    : board[y][x]


export const getRelativePosition = ([x, y]: CellPosition) =>
  ([dx, dy]: StepDirection, amount: 1 | 2): CellPosition => {
    const newX = (x + dx * amount)
    const newY = (y + dy * amount)
    return [newX, newY] as CellPosition
  }

export const getMove = (abstractMove: AbstractMove): Move => {
  const { direction, from } = abstractMove
  const stepsDirections = DIRECTIONS[direction]
  const eating = getRelativePosition(from)(stepsDirections, 1)
  const movingTo = getRelativePosition(from)(stepsDirections, 2)
  return {
    from,
    direction,
    eating,
    movingTo
  }
}
export const getValidMove = (board: Board) => (absMove: AbstractMove): Move | null => {
  const move = getMove(absMove)
  const from = getCell(board)(move.from)
  if (!isMarble(from)) { return null }
  const eating = getCell(board)(move.eating)
  if (!isMarble(eating)) { return null }
  const movingTo = getCell(board)(move.movingTo)
  if (!isHole(movingTo)) { return null }
  return move
}

export const getAllValidMovesForBoard = (board: Board): Move[] =>
  board.reduce(
    (allMoves, row, y) => allMoves.concat(
      row.reduce((rowMoves, _cell, x) => rowMoves.concat(validMovesFromPosition(board)([x, y] as CellPosition)), [] as Move[]
      )), [] as Move[])

export const validMovesFromPosition = (board: Board) => (from: CellPosition): Move[] =>
  DIRTAGS.reduce<Move[]>((validMoves, direction) => {
    const validMove = getValidMove(board)({ from, direction })
    if (!validMove) { return validMoves }
    validMoves.push(validMove)
    return validMoves
  }, [])


export const canMoveHere = (board: Board) => (from: CellPosition, to: CellPosition): DirTag | void => {

  const move = validMovesFromPosition(board)(from)
    .find(move => isSamePosition(move.movingTo, to))
  return move && move.direction
}
export const move = (board: Board) => (move: AbstractMove): Board | null => {
  const validMove = getValidMove(board)(move)
  if (!validMove) { return null }
  const newBoard = board.map(row => row.slice())

  const [from_x, from_y] = validMove.from
  newBoard[from_y][from_x] = Cell.Hole

  const [eating_x, eating_y] = validMove.eating
  newBoard[eating_y][eating_x] = Cell.Hole

  const [movingTo_x, movingTo_y] = validMove.movingTo
  newBoard[movingTo_y][movingTo_x] = Cell.Marble

  return newBoard
}


export const moveBack = (board: Board) => (move: AbstractMove): Board | null => {
  const validMove = getValidBackMove(board)(move)
  if (!validMove) { return null }
  const newBoard = board.map(row => row.slice())

  const [from_x, from_y] = validMove.from
  newBoard[from_y][from_x] = Cell.Marble

  const [eating_x, eating_y] = validMove.eating
  newBoard[eating_y][eating_x] = Cell.Marble

  const [movingTo_x, movingTo_y] = validMove.movingTo
  newBoard[movingTo_y][movingTo_x] = Cell.Hole

  return newBoard
}

export const getValidBackMove = (board: Board) => (absMove: AbstractMove): Move | null => {
  const move = getMove(absMove)
  const from = getCell(board)(move.from)
  if (!isHole(from)) { return null }
  const eating = getCell(board)(move.eating)
  if (!isHole(eating)) { return null }
  const movingTo = getCell(board)(move.movingTo)
  if (!isMarble(movingTo)) { return null }
  return move
}
// export const isPositionsEquals = (p1: CellPosition, p2: CellPosition) => p1[0] === p2[0] && p1[1] === p2[1]
// export const getRelativeCell = (board: Board) =>
//   (position: CellPosition) =>
//     (stepDirectio: StepDirection, amount: 1 | 2): CellAny =>
//       getCell(board)(getRelativePosition(position)(stepDirectio, amount))

// export const getRelativePositionType = (board: Board) =>
//   (position: CellPosition) =>
//     (stepDirectio: StepDirection, amount: 1 | 2): CellType =>
//       getPositionType(board)(getRelativePosition(position)(stepDirectio, amount))

