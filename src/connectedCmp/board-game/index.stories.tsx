import React, { useEffect, useState } from 'react';

import { storiesOf } from '@storybook/react';
import IndexCmp from './';
import { simple_factory } from '../../lib/game/service/simple';
import { simple_in_mem_storage } from '../../lib/game/persistence/SimplePersistence/inProcessMemoryStorage';
import { simple_persistence } from '../../lib/game/persistence/SimplePersistence';
import { GameId } from '../../lib/game/persistence/Types';


storiesOf('cmp/board-game-index', module).add(
  'game',
  () => {
    const service = simple_factory({ persistence: simple_persistence({ storage: simple_in_mem_storage({}) }) })
    const Wrapper: React.FC = () => {
      const [gameId, setGameId] = useState<GameId>()
      useEffect(() => {
        service.newGame({}).then(_ => _.id).then(setGameId)
      }, [])
      return gameId ? <IndexCmp {...{ service, gameId }} /> : null
    }
    return (

      <Wrapper />
    )
  },
);