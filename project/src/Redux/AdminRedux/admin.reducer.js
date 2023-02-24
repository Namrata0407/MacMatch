import * as types from "./admin.actionTypes";

const initialState ={
    isLoading:false,
    data:[],
    isError:false,
    users:[],
    orders:[]
}

 const reducer = (state=initialState, action)=>{
    const {type, payload} = action;
    
    switch(type){
      //for get data   
        case types.ADMIN_GET_DATA_REQUEST:{
            return{
                ...state, isLoading:true
            }
        };

        case types.ADMIN_GET_DATA_SUCCESS:{
  
   
            return {
                ...state, isLoading:false, data:payload
            }
        };

        case types.ADMIN_GET_DATA_ERROR:{
            return {
                ...state, isLoading:false, isError:true
            }
        };

        //for post data

        case types.ADMIN_POST_DATA_REQUEST : {
            return {
                ...state, isLoading:true
            }
        };

        case types.ADMIN_POST_DATA_SUCCESS:{
            return {
                ...state, isLoading:false, data:[payload,...state.data]
            }
        };

        case types.ADMIN_POST_DATA_ERROR:{
            return {
                ...state, isLoading:false, isError:true
            }
        }

    //for delete 
    case types.ADMIN_DELETE_DATA_REQUEST :{
        return{
            ...state, isLoading:true
        }
    };

    case types.ADMIN_DELETE_DATA_SUCCESS:{
        return{
         ...state, isLoading:false, data: state.data.filter((el)=> el.id != payload)
        }
    };

    case types.ADMIN_DELETE_DATA_ERROR :{
        return {
            ...state, isLoading:false, isError:true
            }
    };

    //for edit
    
    case types.ADMIN_EDIT_DATA_REQUEST:{
        return{
            ...state, isLoading:true
        }
    };

    case types.ADMIN_EDIT_DATA_SUCCESS:{
        return{
            ...state, isLoading:false, data:state.data.map((el)=> el.id === payload.id ?{...el, ...payload}:el)
        }
    };

    case types.ADMIN_EDIT_DATA_ERROR:{
        return{
        ...state, isLoading:false, isError:true
        }
    }
    


    //for users get data

    case types.ADMIN_USERS_DATA_REQUEST :{
        return{
            ...state, isLoading:true
        }
    };

    case types.ADMIN_USERS_DATA_SUCCESS:{
        return{
            ...state, isLoading:false, users:payload
        }
    };

    case types.ADMIN_USERS_DATA_ERROR:{
        return {
            ...state, isLoading:false, isError:true
        }
    };

    //for delete user 

    case types.ADMIN_REQUEST :{
        return{
            ...state, isLoading:true
        }
    };

    case types.ADMIN_DELETE_USERS_DATA_SUCCESS :{
        return{
            ...state, isLoading:false, users: state.users.filter((el)=>el.id != payload)
        }
    };

    case types.ADMIN_ERROR :{
        return{
            ...state, isLoading:false, isError:true
        }
    };

    //for order data
    case types.ADMIN_REQUEST :{
        return{
            ...state, isLoading:true
        }
    };

    case types.ADMIN_USERS_ORDER_DATA_SUCCESS :{
        return{
            ...state, isLoading:false, orders:payload
        }
    };

    case types.ADMIN_ERROR :{
        return{
            ...state, isLoading:false, isError:true
        }
    };
        default :{
           return state;
        }
    }
};


export  {reducer};