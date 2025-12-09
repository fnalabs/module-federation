import React from 'react'
import { RouteObject } from 'react-router'
import { registerRemotes } from '@module-federation/enhanced/runtime'
import cfg from '../config'

import AppLayout from '../components/AppLayout'
import DirectionLayout from '../components/DirectionLayout'
import Home from './Home'

registerRemotes(Object.entries(cfg.remotes).map(([name, remote]) => ({
  name,
  entry: remote.entry,
})))

const Routes: RouteObject = {
  element: <AppLayout />,
  children: [
    {
      element: <DirectionLayout />,
      children: [
        {
          path: '/federation',
          element: <Home />,
        },
      ],
    }
  ],
}
export default Routes
