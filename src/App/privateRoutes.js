import React from 'react'
import HomePage from '../containers/HomePage'
import LoginPage from '../containers/LoginPage'
import Page404 from '../containers/Page404'
import StorePage from '../containers/StorePage'

export const routes = [
  {
    path: '/',
    exact: true,
    protected: true,
    component: <HomePage />,
  },
  {
    path: '/login',
    exact: true,
    protected: false,
    component: <LoginPage />,
  },
  {
    path: '/store',
    exact: true,
    protected: true,
    component: <StorePage />,
  },
  {
    path: '/error_page',
    exact: true,
    protected: false,
    component: <Page404 />,
  },
]
