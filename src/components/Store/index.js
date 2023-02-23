import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AlertDialog from '../../common/Dialog'
import {
  NotiError,
  NotiInfo,
  NotiSuccess,
} from '../../containers/Notifications/actions'
import * as QRServices from '../../services/qrCode'
import { BtnCancel, BtnSave, ListBtn } from '../../UI/ActionsButton'
import DetailStore from './DetailStore'
import ScanQrCode from './ScanQR'

function Store() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [scanner, setScanner] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [qrCodeId, setQrCodeId] = useState('')
  const [dataStore, setDataStore] = useState([])
  const [tableId, setTableId] = useState('')

  // Handle events click
  const handleSave = () => {
    setOpenDialog(true)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  const handleClickCancle = () => {
    return navigate('/login')
  }

  const handleClickBtnRight = () => {
    setOpenDialog(false)
    const fetchQrMapping = async () => {
      const res = await QRServices.postQRMapping('D921', 'A01')
      if (res?.code === 0) {
        // Show success
      } else {
        dispatch(NotiError(res.message))
      }
    }
    fetchQrMapping()
  }

  const handleClickScan = () => {
    setScanner(true)
  }

  const handleCloseScan = () => {
    setScanner(false)
  }

  // Check url QR valid
  const checkValidUrl = (url) => {
    const urlQr = 'https://qr.pizzahut.vn'

    if (url === `${urlQr}/QRCODE06`) {
      return false
    }
    return true
  }

  const getQrIdFromUrl = (url) => {
    return url.split('/')[3]
  }

  const handleScanSuccess = (result) => {
    const url = result.data
    if (!checkValidUrl(url)) {
      // alert('QR khong hop le. Vui long quet lai!')
      dispatch(NotiError('QR does not match. Please try again!'))
    } else {
      setScanner(false)
      setQrCodeId(getQrIdFromUrl(url))
    }
  }

  const handleScanError = (err) => {
    // alert('Scan Error: ' + err)
    dispatch(NotiError('Scan Error: ', err))
  }

  useEffect(() => {
    try {
      if (qrCodeId) {
        const fetchApiQr = async () => {
          const res = await QRServices.getQRInfo(qrCodeId, 'D921')
          if (res?.code === 0) {
            if (res?.data?.tableMapping?.tableId === null) {
              setDataStore(res.data)
            }
          } else {
            dispatch(NotiInfo(res.message))
          }
        }
        fetchApiQr().catch((err) => console.error(err))
      }
    } catch (error) {
      navigate('/error_page')
    }
  }, [qrCodeId, dispatch, navigate])

  return (
    <Box>
      <Container
        maxWidth="lg"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Typography
          variant="h5"
          color="secondary"
          component="h1"
          fontWeight={'bold'}
          textAlign="center"
          mb={2}
        >
          QR CODE
        </Typography>
        <ScanQrCode
          open={scanner}
          onClose={handleCloseScan}
          handleScanSuccess={handleScanSuccess}
          handleScanError={handleScanError}
        />
        <Button
          variant="contained"
          style={{ width: 200, height: 200, fontSize: 20 }}
          onClick={handleClickScan}
        >
          Scan
        </Button>

        <DetailStore dataStore={dataStore} />
        <ListBtn>
          <BtnSave
            handleBtnSave={handleSave}
            disableBtn={dataStore.storeTables ? false : true}
          />
          <BtnCancel handleBtnCancel={handleClickCancle} />
        </ListBtn>

        <AlertDialog
          open={openDialog}
          title="Notifications"
          content={`Do you want to save ?`}
          leftButton="No"
          onClickLeftButton={handleClose}
          rightButton="Yes"
          onClickRightButton={handleClickBtnRight}
          fullWidth={true}
        />
      </Container>
    </Box>
  )
}

export default Store
