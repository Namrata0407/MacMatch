import * as types from "./admin.actionTypes";
import { deleteAdminDataformAPI, deleteAdminUserDataFromAPI, editAdminDataFromAPI, getAdminDataFromAPI, getAdminOrderDataFromAPI, getAdminUserDataFromAPI, postAdminDataFromAPI } from "./admin.api";

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
        type:types.ADMIN_POST_DATA_REQUEST
    }
};


const handleAdminPostDataSuccess = (payload)=>{
    return{
        type: types.ADMIN_POST_DATA_SUCCESS,
        payload
    }
};

const handleAdminPostDataError = ()=>{
    return {
        type: types.ADMIN_POST_DATA_ERROR
    }
};

//for delete data 

const handleAdminDeleteRequest = ()=>{
    return {
        type: types.ADMIN_DELETE_DATA_REQUEST
    }
};

const handleAdminDeleteSuccess = (payload)=>{
    return{
        type: types.ADMIN_DELETE_DATA_SUCCESS,
        payload
    }
};

const hadleAdminDeleteError = ()=>{
    return {
        type: types.ADMIN_DELETE_DATA_ERROR
    }
};

//for edit 

const handleAdminEditRequest = ()=>{
    return {
        type: types.ADMIN_EDIT_DATA_REQUEST
    }
};

const handleAdminEditSuccess = (payload)=>{
    return {
        type: types.ADMIN_EDIT_DATA_SUCCESS,
        payload
    }
};

const handleAdminEditError = ()=>{
    return {
        type: types.ADMIN_EDIT_DATA_ERROR
    }
};

//for user get data 

const handleAdminUsersRequest = ()=>{
    return {
        type: types.ADMIN_USERS_DATA_REQUEST
    }
}


const handleAdminUsersSuccess = (payload)=>{
    return {
        type: types.ADMIN_USERS_DATA_SUCCESS,
        payload
    }
};

const handleAdminUsersError = ()=>{
    return {
        type: types.ADMIN_USERS_DATA_ERROR
    }
}

//for user delete data 
const handleAdminDeleteUsersRequest = ()=>{
    return {
        type: types.ADMIN_REQUEST
    }
};

const handleAdminDeleteUsersSuccess = (payload)=>{
    return {
        type: types.ADMIN_DELETE_USERS_DATA_SUCCESS,
        payload
    }
};

const handleAdminDeleteUsersError = ()=>{
    return {
        type: types.ADMIN_ERROR
    }
}

//for get order 
const handleAdminRequest = ()=>{
    return {
        type: types.ADMIN_REQUEST
    }
};

const handleAdminOrderUsersSuccess = (payload)=>{
    return {
        type: types.ADMIN_USERS_ORDER_DATA_SUCCESS,
        payload
    }
};

const handleAdminError = ()=>{
    return {
        type: types.ADMIN_ERROR
    }
}


//for get data
const getAdminDataProduct = (payload)=> async(dispatch)=>{
    dispatch(handleAdminGetDataRequest());

    try {
        const res = await getAdminDataFromAPI(payload)
        if(res.data){
       
            dispatch(handleAdminGetDataSuccess(res.data))
            return res.totoalPages;
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
};

//for delete
const deleteAdminDataProduct = (id)=>async(dispatch)=>{
dispatch(handleAdminDeleteRequest());

try {
    const res = await deleteAdminDataformAPI(id)
    if(res){
        dispatch(handleAdminDeleteSuccess(id))
    }
} catch (error) {
    dispatch(hadleAdminDeleteError())
}
};


//for update 
const editAdminDataProduct = (id,payload)=> async(dispatch)=>{
dispatch(handleAdminEditRequest());

try {
    const res = await editAdminDataFromAPI(id,payload);
    if(res){
        dispatch(handleAdminEditSuccess(res))
    }
} catch (error) {
    dispatch(handleAdminEditError())
}
};

//for users get data 

const getUsersAdminData =async (dispatch)=>{
    dispatch(handleAdminUsersRequest());

    try {
        const res = await getAdminUserDataFromAPI()
        if(res){
            dispatch(handleAdminUsersSuccess(res))
        }
    } catch (error) {
        dispatch(handleAdminUsersError())
    }
};

//for user delete data

const deleteUserAdminData = (id)=>async(dispatch)=>{
 
    dispatch(handleAdminDeleteUsersRequest())
    try {
        const res = await deleteAdminUserDataFromAPI(id)
        if(res){
            dispatch(handleAdminDeleteUsersSuccess(id))
        }
    } catch (error) {
        dispatch(handleAdminDeleteUsersError())
    }
};

//for get orders

const ordersAdminData = async(dispatch)=>{
    dispatch(handleAdminRequest());

    try {
        const res = await getAdminOrderDataFromAPI();
        if(res){
            dispatch(handleAdminOrderUsersSuccess(res))
        }
    } catch (error) {
        dispatch(handleAdminError())
    }
}

export {ordersAdminData,handleAdminError,handleAdminOrderUsersSuccess,handleAdminRequest,handleAdminDeleteUsersRequest,handleAdminGetDataRequest,handleAdminGetDataSuccess,handleAdminGetDataError,getAdminDataProduct,handleAdminPostDataError,handleAdminPostDataRequest,handleAdminPostDataSuccess,postAdminDataProduct,handleAdminDeleteRequest,hadleAdminDeleteError,handleAdminDeleteSuccess,deleteAdminDataProduct,handleAdminEditError,handleAdminEditRequest,handleAdminEditSuccess,editAdminDataProduct,handleAdminUsersError,handleAdminUsersRequest,handleAdminUsersSuccess,getUsersAdminData,handleAdminDeleteUsersSuccess,deleteUserAdminData}