import { CheckCircle, Error, Info, Warning } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './toastStyles.css'

function Notifications() {
  const { status, content } = useSelector((state) => state.notificationsReducer)

  useEffect(() => {
    if (status === 'success') {
      toast.success(content, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        icon: <CheckCircle />,
      })
    } else if (status === 'warning') {
      toast.warn(content, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 9000,
        icon: <Warning />,
      })
    } else if (status === 'error') {
      toast.error(content, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 9000,
        icon: <Error />,
      })
    } else if (status === 'info') {
      toast.info(content, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 9000,
        icon: <Info />,
      })
    } else {
      return
    }
  }, [status, content])

  return (
    <>
      <ToastContainer />
    </>
  )
}

export default Notifications
