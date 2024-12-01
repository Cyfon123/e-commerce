import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE, GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS } from "./ActionType";

const initialState = {
  addresses: [],

  address: null,

  error: null,

  loading: false,
};

export const addressReducer = (state=initialState, action)=>{
    switch(action.type)
    {
        case CREATE_ADDRESS_REQUEST:
        case GET_ADDRESS_REQUEST:
            return {...state, loading: true, error: null}
        case CREATE_ADDRESS_SUCCESS:
            return {...state, loading: false, error: null, addresses: action.payload}
        case CREATE_ADDRESS_FAILURE:
            return {...state, loading: false, error: action.payload}

        case GET_ADDRESS_SUCCESS:
            return {...state, loading: false, error: null, addresses: action.payload}
        case GET_ADDRESS_FAILURE:
            return {...state, loading: false, error: action.payload}

        default:
            return state;
    }
}