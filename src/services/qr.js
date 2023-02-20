import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_API_DOMAIN}/phvn/qrcodemapping/get-tablemapping`

export const getQRInfo = async (qrCodeId, storeId) => {
  const request = axios.get(baseUrl, {
    params: { qrCodeId: qrCodeId, storeId: storeId },
  })
  return request.then((response) => response.data)
}
