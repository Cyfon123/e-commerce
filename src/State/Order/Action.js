import { api } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";

export const  createOrder = (reqData) => async (dispatch) => {
    console.log("reqData :- ",reqData);
    try{
        dispatch({type : CREATE_ORDER_REQUEST});

        const {data} = await api.post(`/api/orders/`, reqData.address);
        if(data.id)
            reqData.navigate({ search: `step=3&order_id=${data.id}`});
        console.log("Order created:- ", data)
        dispatch({type : CREATE_ORDER_SUCCESS, payload: data});
    }
    catch(error)
    {
        dispatch({type : CREATE_ORDER_FAILURE, payload: error.response && error.response.data.message ? error.response.data.message : error.message});

    }
}

export const getOrderById = (orderId) => async (dispatch) => {
    try{
        dispatch({type : GET_ORDER_BY_ID_REQUEST});
        const {data} = await api.get(`/api/orders/${orderId}`);
        dispatch({type : GET_ORDER_BY_ID_SUCCESS, payload : data});
    }
    catch(error)
    {
        dispatch({type : GET_ORDER_BY_ID_FAILURE, payload: error.message});
    }
}