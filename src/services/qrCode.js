import axios from 'axios'
import { BASE_URL } from '../baseApi'

export const getQRInfo = async (qrCodeId, storeId) => {
  const request = axios.get(`${BASE_URL}/phvn/qrcodemapping/get-tablemapping`, {
    params: { qrCodeId: qrCodeId, storeId: storeId },
  })
  return request.then((response) => response.data)
}

export const postQRMapping = async (qrCodeId, storeId, tableId, userName) => {
  const request = axios.post(`${BASE_URL}/phvn/qrcodemapping/qrcodemapping`, {
    // Data send to server
    qrCodeId: qrCodeId,
    tableId: tableId,
    storeId: storeId,
    userName: userName,
  })
  return request.then((response) => response.data)
}
