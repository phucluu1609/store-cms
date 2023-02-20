import { Box, Modal, Button } from '@mui/material'
import React from 'react'
import QrReader from 'react-web-qr-reader'

const delay = 300

const BoxScan = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  textAlign: 'center',
}

function ScanQrCode({ open, onClose, handleScanSuccess, handleScanError }) {
  return (
    <>
      <Modal open={open}>
        <Box sx={BoxScan}>
          <QrReader
            delay={delay}
            onError={handleScanError}
            onScan={handleScanSuccess}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            style={{ marginTop: '20px' }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default ScanQrCode
