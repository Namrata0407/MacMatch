import * as types from "./admin.actionType";

const initialState ={
    isLoading:false,
    data:[],
    isError:false
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
        default :{
           return state;
        }
    }
};


export  {reducer};