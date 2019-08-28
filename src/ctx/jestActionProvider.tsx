import React from 'react';
import { MainCtx, MarbleCtx, HoleCtx } from './board-game';
import { jestAction } from '../lib/utils/action-proxy/jest-action';

export const JestActionProvider: React.FC = ({ children }) => {

  return (
    <MainCtx.Provider value={jestAction()}>
      <MarbleCtx.Provider value={jestAction()}>
        <HoleCtx.Provider value={jestAction()}>
          {children}
        </HoleCtx.Provider>
      </MarbleCtx.Provider>
    </MainCtx.Provider>
  )
} 