import { SlotPosition, Slot, DirTag, Directions, Board, StepDirection, Move, AbstractMove } from './Types';

export const isMarble = (_: Slot): _ is Slot.Marble => _ === Slot.Marble
export const isHole = (_: Slot): _ is Slot.Hole => _ === Slot.Hole
export const isOut = (_: Slot): _ is Slot._Out => _ === Slot._Out


export const DIRTAGS: DirTag[] = ['N', 'E', 'W', 'S']
export const DIRECTIONS: Directions = {
  N: [0, -1],
  E: [1, 0],
  W: [-1, 0],
  S: [0, 1]
}

export const isSamePosition = (pos1: SlotPosition, pos2: SlotPosition) => pos1[1] === pos2[1] && pos1[0] === pos2[0]

export const getSlot = (board: Board) => ([x, y]: SlotPosition) =>
  (x < 0 || y < 0 || y >= board.length || x >= board[0].length)
    ? Slot._Out
    : board[y][x]


export const getRelativePosition = ([x, y]: SlotPosition) =>
  ([dx, dy]: StepDirection, amount: 1 | 2): SlotPosition => {
    const newX = (x + dx * amount)
    const newY = (y + dy * amount)
    return [newX, newY] as SlotPosition
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
  const from = getSlot(board)(move.from)
  if (!isMarble(from)) { return null }
  const eating = getSlot(board)(move.eating)
  if (!isMarble(eating)) { return null }
  const movingTo = getSlot(board)(move.movingTo)
  if (!isHole(movingTo)) { return null }
  return move
}

export const getAllValidMovesForBoard = (board: Board): Move[] =>
  board.reduce(
    (allMoves, row, y) => allMoves.concat(
      row.reduce((rowMoves, _slot, x) => rowMoves.concat(validMovesFromPosition(board)([x, y] as SlotPosition)), [] as Move[]
      )), [] as Move[])

export const validMovesFromPosition = (board: Board) => (from: SlotPosition): Move[] =>
  DIRTAGS.reduce<Move[]>((validMoves, direction) => {
    const validMove = getValidMove(board)({ from, direction })
    if (!validMove) { return validMoves }
    validMoves.push(validMove)
    return validMoves
  }, [])


export const canMoveHere = (board: Board) => (from: SlotPosition, to: SlotPosition): DirTag | void => {

  const move = validMovesFromPosition(board)(from)
    .find(move => isSamePosition(move.movingTo, to))
  return move && move.direction
}
export const move = (board: Board) => (move: AbstractMove): Board | null => {
  const validMove = getValidMove(board)(move)
  if (!validMove) { return null }
  const newBoard = board.map(row => row.slice())

  const [from_x, from_y] = validMove.from
  newBoard[from_y][from_x] = Slot.Hole

  const [eating_x, eating_y] = validMove.eating
  newBoard[eating_y][eating_x] = Slot.Hole

  const [movingTo_x, movingTo_y] = validMove.movingTo
  newBoard[movingTo_y][movingTo_x] = Slot.Marble

  return newBoard
}

// export const isPositionsEquals = (p1: SlotPosition, p2: SlotPosition) => p1[0] === p2[0] && p1[1] === p2[1]
// export const getRelativeSlot = (board: Board) =>
//   (position: SlotPosition) =>
//     (stepDirectio: StepDirection, amount: 1 | 2): SlotAny =>
//       getSlot(board)(getRelativePosition(position)(stepDirectio, amount))

// export const getRelativePositionType = (board: Board) =>
//   (position: SlotPosition) =>
//     (stepDirectio: StepDirection, amount: 1 | 2): SlotType =>
//       getPositionType(board)(getRelativePosition(position)(stepDirectio, amount))

