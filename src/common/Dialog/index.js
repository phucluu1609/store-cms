import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import React from 'react'

export default function AlertDialog(props) {
  const {
    open,
    onClose,
    title,
    content,
    rightButton,
    leftButton,
    onClickRightButton,
    onClickLeftButton,
  } = props

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {leftButton && (
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={onClickLeftButton}
          >
            {leftButton}
          </Button>
        )}
        {rightButton && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onClickRightButton}
            autoFocus
          >
            {rightButton}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}
