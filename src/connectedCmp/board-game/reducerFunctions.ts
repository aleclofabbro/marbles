import { BoardGameData } from '../../cmp/board-game/type/BoardGameData';
import { BoardData } from '../../cmp/board-game/type/BoardData';
import { Board, CellPosition, DirTag, Cell } from '../../lib/board/Types';
import { moveBack, move, isMarble, isSamePosition, validMovesFromPosition, isHole, canMoveHere } from '../../lib/board';
import { CellData, CellMarble, CellHole, CellOut } from '../../cmp/board-game/type/CellData';



export function history(boardGameData: BoardGameData, back: boolean) {
  if (
    (back && !boardGameData.movesHistory.past.length)
    ||
    (!back && !boardGameData.movesHistory.future.length)
  ) { return boardGameData }

  const movesHistory: BoardGameData['movesHistory'] = {
    past: [],
    future: []
  }
  let boardData: BoardData
  let board: Board | null
  let selectedMarble: CellPosition | undefined

  if (back) {
    const prevMove = boardGameData.movesHistory.past[0]
    board = moveBack(boardGameData.board)(prevMove)
    if (!board) { return boardGameData }

    selectedMarble = prevMove.from
    movesHistory.past = boardGameData.movesHistory.past.slice(1)
    movesHistory.future = [prevMove, ...boardGameData.movesHistory.future]
    boardData = BoardDataFromBoard(board, selectedMarble)
  } else {
    const nextMove = boardGameData.movesHistory.future[0]
    board = move(boardGameData.board)(nextMove)
    if (!board) { return boardGameData }

    selectedMarble = boardGameData.movesHistory.future[1] && boardGameData.movesHistory.future[1].from
    movesHistory.future = boardGameData.movesHistory.future.slice(1)
    movesHistory.past = [nextMove, ...boardGameData.movesHistory.past]
    boardData = BoardDataFromBoard(board, selectedMarble)
  }

  return {
    ...boardGameData,
    selectedMarble,
    movesHistory,
    boardData,
    board
  }
}

export function moveHere(boardGameData: BoardGameData, direction: DirTag) {
  if (!boardGameData.selectedMarble) { return boardGameData }
  const absMove = { direction, from: boardGameData.selectedMarble }
  const board = move(BoardFromBoardData(boardGameData.boardData))(absMove)
  if (!board) { return boardGameData }
  const boardData = BoardDataFromBoard(board)
  return {
    ...boardGameData,
    board,
    boardData,
    movesHistory: {
      future: [],
      past: [absMove, ...boardGameData.movesHistory.past]
    },
    selectedMarble: undefined
  }
}

export function selectMarble(prev: BoardGameData, selectedMarble: CellPosition) {
  const board = BoardFromBoardData(prev.boardData)
  const boardData = BoardDataFromBoard(board, selectedMarble)
  return {
    ...prev,
    board,
    boardData,
    selectedMarble
  }
}

export function BoardDataFromBoard(board: Board, selectedMarble?: CellPosition): BoardData {
  return {
    cells: board.map(
      (row, nrow) => row.map(
        (cellT, ncol) => CellFromCellT(board, cellT, [ncol, nrow], selectedMarble)
      )
    )
  }
}

export function BoardFromBoardData(boardData: BoardData): Board {
  return boardData.cells.map(
    row => row.map(
      cellT => cellT.type
    )
  )
}

export function CellFromCellT(
  board: Board,
  cell: Cell,
  pos: CellPosition,
  selectedPos?: CellPosition,
): CellData {
  if (isMarble(cell)) {
    const selected = !!selectedPos && isSamePosition(pos, selectedPos)
    const cellMarble: CellMarble = {
      type: cell,
      pos,
      selected: selected,
      canSelect: selected || !!validMovesFromPosition(board)(pos).length
    }
    return cellMarble
  } else if (isHole(cell)) {
    const cellMarble: CellHole = {
      type: cell,
      pos,
      validMoveDirection: selectedPos && canMoveHere(board)(selectedPos, pos)
    }
    return cellMarble
  } else {
    const cellOut: CellOut = { type: cell, pos }
    return cellOut
  }
}
