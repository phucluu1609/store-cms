import styled from '@emotion/styled'
import { Close, Home, Logout, Storefront } from '@mui/icons-material'
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../containers/LoginPage/actions'

const BoxMenu = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9999,
  transition: 'all 0.5s ease',
})

const ContainerMenu = styled('div')({
  maxWidth: 210,
  height: '100%',
  background: '#222D32',
  overflow: 'hidden',
  transition: 'all 0.5s ease',
})

const CloseButton = styled('div')({
  display: 'flex ',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: 8,
})

const menuItems = [
  {
    name: 'Home',
    icon: <Home />,
    path: '/',
  },
  {
    name: 'Stores',
    icon: <Storefront />,
    path: '/store',
  },
  {
    name: 'Logout',
    icon: <Logout />,
    path: '/login',
  },
]

function Sidebar({ onClick: handleToggleMenu }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickMenu = (path) => {
    handleToggleMenu()
    navigate(path)

    if (path === '/login') {
      dispatch(logOut())
    }
  }

  return (
    <BoxMenu>
      <ContainerMenu>
        <CloseButton>
          <IconButton
            style={{ color: '#b8c7ce', minWidth: 0 }}
            onClick={handleToggleMenu}
          >
            <Close />
          </IconButton>
        </CloseButton>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem
                button
                key={item.path}
                onClick={() => handleClickMenu(item.path)}
              >
                <ListItemIcon
                  style={{ color: '#b8c7ce', minWidth: 0, marginRight: 10 }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  style={{ color: '#b8c7ce' }}
                />
              </ListItem>
            )
          })}
        </List>
      </ContainerMenu>
    </BoxMenu>
  )
}

export default Sidebar
