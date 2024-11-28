import { api } from "../../config/apiConfig";
import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE, GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS } from "./ActionType";

export const  createAddress = (reqData) => async (dispatch) => {
    console.log("create Address before Api :- ",reqData);
    try{
        dispatch({type : CREATE_ADDRESS_REQUEST});

        const {data} = await api.post(`/api/address`, reqData);

        console.log("Address created after api:- ", data)
        dispatch({type : CREATE_ADDRESS_SUCCESS, payload: data});
        return data;
    }
    catch(error)
    {
        dispatch({type : CREATE_ADDRESS_FAILURE, payload: error.response && error.response.data.message ? error.response.data.message : error.message});

    }
}

export const getAddresses = () => async (dispatch) => {
    try{
        dispatch({type : GET_ADDRESS_REQUEST});
        const {data} = await api.get(`/api/address`);
        dispatch({type : GET_ADDRESS_SUCCESS, payload : data});
    }
    catch(error)
    {
        dispatch({type : GET_ADDRESS_FAILURE, payload: error.message});
    }
}