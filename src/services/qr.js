import axios from 'axios'

const baseUrl = `https://uatapi.pizzahut.vn/API_CMS_STORE_UAT/phvn/qrcodemapping/get-tablemapping`

export const getQRInfo = async (qrCodeId, storeId) => {
  const request = axios.get(baseUrl, {
    params: { qrCodeId: qrCodeId, storeId: storeId },
  })
  return request.then((response) => response.data)
}
