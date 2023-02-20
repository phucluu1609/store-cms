import styled from '@emotion/styled'
import { Add, Clear, Delete, Edit, Publish, Save } from '@mui/icons-material'
import { Button } from '@mui/material'

// Styled component
const BoxListBtn = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
})

const ButtonSave = styled(Button)({
  backgroundColor: '#04aa6d',
  '&:hover': {
    backgroundColor: '#04aa6d',
  },
  marginLeft: 15,
})

const ButtonCancle = styled(Button)({
  backgroundColor: '#6c757d',
  '&:hover': {
    backgroundColor: '#6c757d',
  },
  marginLeft: 15,
})

const BtnAdd = (props) => {
  return (
    <Button
      startIcon={<Add />}
      variant="contained"
      color="primary"
      onClick={() => props.handleBtnAdd()}
      size="small"
    >
      Add
    </Button>
  )
}

const BtnDelete = (props) => {
  return (
    <Button
      variant="contained"
      startIcon={<Delete />}
      color="primary"
      onClick={() => props.handleBtnDelete()}
      size="small"
    >
      Delete
    </Button>
  )
}

const BtnEdit = (props) => {
  return (
    <Button
      startIcon={<Edit />}
      variant="contained"
      color="primary"
      onClick={() => props.handleBtnEdit()}
      size="small"
    >
      Edit
    </Button>
  )
}

const BtnSave = (props) => {
  const { disableBtn } = props
  return (
    <ButtonSave
      startIcon={<Save />}
      variant="contained"
      color="primary"
      onClick={() => props.handleBtnSave()}
      size="small"
      disabled={disableBtn}
    >
      Save
    </ButtonSave>
  )
}

const BtnCancel = (props) => {
  return (
    <ButtonCancle
      startIcon={<Clear />}
      variant="contained"
      color="primary"
      onClick={() => props.handleBtnCancel()}
      size="small"
    >
      Cancel
    </ButtonCancle>
  )
}

const BtnUpdate = (props) => {
  return (
    <Button
      startIcon={<Publish />}
      variant="contained"
      color="primary"
      onClick={() => props.handleBtnUpdate()}
      size="small"
    >
      Update
    </Button>
  )
}

const ListBtn = (props) => {
  return <BoxListBtn>{props.children}</BoxListBtn>
}
export { BtnAdd, BtnDelete, BtnEdit, BtnSave, BtnCancel, BtnUpdate, ListBtn }
