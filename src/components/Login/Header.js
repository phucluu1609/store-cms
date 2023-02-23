import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo from '../../images/logo.svg'

const Logo = styled('img')({
  width: 34,
  marginRight: 5,
  cursor: 'pointer',
})

function Header(props) {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Logo src={logo} alt="PizzaHut Logo" loading="lazy" />
        <Typography variant="h6" component="h1">
          {' '}
          STORE-CMS{' '}
          {window.location.hostname === 'cmspro.pizzahut.vn' ||
          window.location.hostname === '172.17.0.46'
            ? 'PRODUCTION'
            : 'UAT'}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
