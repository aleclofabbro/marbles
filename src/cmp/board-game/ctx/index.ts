import { createContext } from 'react';
import { alertUnimplementedAction } from '../../../lib/utils/action-proxy/alertUnimplementedAction';
import { SlotPosition, DirTag } from '../../../lib/board/Types';

export type MainCtxT = {
  selectMarble(pos: SlotPosition): unknown
  moveHere(dirtag: DirTag): unknown
}
const _mainCtxPlaceholder = alertUnimplementedAction<MainCtxT>()
export const MainCtx = createContext<MainCtxT>(_mainCtxPlaceholder)

export type MarbleCtxT = Pick<MainCtxT, 'selectMarble'>
export const MarbleCtx = createContext<MarbleCtxT>(_mainCtxPlaceholder)

export type HoleCtxT = Pick<MainCtxT, 'moveHere'>
export const HoleCtx = createContext<HoleCtxT>(_mainCtxPlaceholder)
