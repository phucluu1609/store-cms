import {
  AccountCircle,
  Logout,
  ManageAccounts,
  Person,
  Settings,
} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logOut } from '../../containers/LoginPage/actions'
import logo from '../../images/logo.svg'

const Logo = styled('img')({
  width: 40,
  marginRight: 5,
  cursor: 'pointer',
})

function Header({ onClick: handleToggleMenu }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(null)
  const infoUser = useSelector((state) => state.loginPageReducer.infoUser)

  // Handle events
  const handleClickMenu = (e) => {
    setOpen(e.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/login')
  }

  return (
    <AppBar
      position="fixed"
      style={{
        boxShadow: '0px 4px 7px -3px #00000094',
      }}
      color="inherit"
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ mr: 2 }}
          onClick={handleToggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="div"
          style={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Logo src={logo} alt="PizzaHut Logo" loading="lazy" />
        </Typography>

        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-account"
            onClick={handleClickMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-account"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            open={open}
            onClose={handleClose}
            style={{ padding: 0 }}
          >
            <Typography variant="body1" textAlign="center" padding={1}>
              {infoUser[0]?.email}
            </Typography>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ManageAccounts fontSize="small" />
              </ListItemIcon>
              Manage Users
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogOut}>
              <ListItemIcon>
                <Logout fontSize="small" sx={{ color: '#04aa6d' }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
