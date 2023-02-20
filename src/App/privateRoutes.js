import React from 'react'
import HomePage from '../containers/HomePage'
import StorePage from '../containers/StorePage'

export const routes = [
  {
    path: '/store',
    exact: true,
    protected: true,
    component: <StorePage />,
  },
  {
    path: '/',
    exact: true,
    protected: true,
    component: <HomePage />,
  },
]
