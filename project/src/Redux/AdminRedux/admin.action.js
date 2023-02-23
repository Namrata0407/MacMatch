import * as types from "./admin.actionTypes";
import { getAdminDataFromAPI, postAdminDataFromAPI } from "./admin.api";

const handleAdminGetDataRequest = ()=>{
 
    return {
        type:types.ADMIN_GET_DATA_REQUEST
    }
};


const handleAdminGetDataSuccess = (payload)=>{
    return{
        type: types.ADMIN_GET_DATA_SUCCESS,
        payload
    }
};

const handleAdminGetDataError = ()=>{
    return {
        type: types.ADMIN_GET_DATA_ERROR
    }
};

//for Post data
const handleAdminPostDataRequest = ()=>{
 
    return {
        type:types.ADMIN_GET_DATA_REQUEST
    }
};


const handleAdminPostDataSuccess = (payload)=>{
    return{
        type: types.ADMIN_GET_DATA_SUCCESS,
        payload
    }
};

const handleAdminPostDataError = ()=>{
    return {
        type: types.ADMIN_GET_DATA_ERROR
    }
};

//for get data
const getAdminDataProduct = async(dispatch)=>{
    dispatch(handleAdminGetDataRequest());

    try {
        const res = await getAdminDataFromAPI()
        if(res){
       
            dispatch(handleAdminGetDataSuccess(res))
        }
    } catch (error) {
        dispatch(handleAdminGetDataError())
    }
   
};

//for post data

const postAdminDataProduct = (payload)=>async (dispatch)=>{
    dispatch(handleAdminPostDataRequest());

    try {
        const res = await postAdminDataFromAPI(payload)
        if(res){
            dispatch(handleAdminPostDataSuccess(res))
        }
    } catch (error) {
        dispatch(handleAdminPostDataError())
    }
}
export {handleAdminGetDataRequest,handleAdminGetDataSuccess,handleAdminGetDataError,getAdminDataProduct,handleAdminPostDataError,handleAdminPostDataRequest,handleAdminPostDataSuccess,postAdminDataProduct}