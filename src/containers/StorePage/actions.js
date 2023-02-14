import {
  GET_API_STORE,
  RECEIVE_DATA_STORE,
  GET_API_UPDATE_STORE,
  GET_API_ADD_STORE,
  GET_API_DELETE_STORE,
  GET_API_INFO_STORE,
  ITEM_STORE_INFO_SELECTED,
  SET_STATUS_ACTION_STORE_INFO,
} from "./constants";

export function getApiStore(data) {
  return {
    type: GET_API_STORE,
    payload: data,
  };
}

export function reciveDataStore(data) {
  return {
    type: RECEIVE_DATA_STORE,
    payload: data,
  };
}

export function getApiStoreInfo(data) {
  return {
    type: GET_API_INFO_STORE,
    payload: data,
  };
}

export function getApiAddStore(data) {
  return {
    type: GET_API_ADD_STORE,
    payload: data,
  };
}

export function getApiUpdateStore(data) {
  return {
    type: GET_API_UPDATE_STORE,
    payload: data,
  };
}

export function getApiDeleteStore(data) {
  return {
    type: GET_API_DELETE_STORE,
    payload: data,
  };
}

export function itemStoreSelected(data) {
  return {
    type: ITEM_STORE_INFO_SELECTED,
    payload: data,
  };
}

export function setStatusActionStoreInfo(status) {
  return {
    type: SET_STATUS_ACTION_STORE_INFO,
    payload: status,
  };
}
