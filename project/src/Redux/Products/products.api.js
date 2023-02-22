import axios from "axios";

export const getDataApi = async (getProductsParam,pageNo,limitval) => {
  try {
    let res = await axios.get(
      `https://thankful-loafers-hare.cyclic.app/apple?_page=${pageNo}&_limit=${limitval}`,
      getProductsParam
    );
  
    return res.data;
  } catch (er) {
    console.log(er);
  }
};

export const UpdataDataApi = async (data) => {
  try {
    let res = await axios.patch(
      `https://thankful-loafers-hare.cyclic.app/apple/${data.id}`,
      { ...data }
    );
    return res.data;
  } catch (er) {
    console.log(er);
  }
};

export const DeleteDataApi = async (id) => {
  try {
    let res = await axios.delete(
      `https://thankful-loafers-hare.cyclic.app/apple/${id}`
    );
    return res.data;
  } catch (er) {
    console.log(er);
  }
};

export const PostDataApi=async(data)=>{
    try{
        let res=await axios.post('https://thankful-loafers-hare.cyclic.app',{...data})
        return res.data;
    }
    catch(er){
        console.log(er)
    }
}


export const getTotalDataApi=async()=>{
  try{
let res=await axios.get('https://thankful-loafers-hare.cyclic.app/apple');
return res.data;
  }

  catch(er){
    console.log(er)
  }
}