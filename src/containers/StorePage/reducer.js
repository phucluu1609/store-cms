import { RECEIVE_DATA_STORE } from "./constants";

export const initialState = {
  statusActionStoreInfo: "",
  dataList: [],
};

export const storePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DATA_STORE:
      return {
        ...state,
        dataList: action.payload,
      };

    default:
      return state;
  }
};
