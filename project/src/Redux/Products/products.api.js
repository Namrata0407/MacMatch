import axios from "axios";

export const getDataApi = async (getProductsParam="",pageNo,limitval=6) => {
  try {
    let res = await axios.get(
      `https://mockserver-rny6.onrender.com/apple?_page=${pageNo}&_limit=${limitval}`,
      getProductsParam
    );
  // console.log(res.headers["x-total-count"])
    return res;
  } catch (er) {
    console.log(er);
  }
};

export const UpdataDataApi =async ({...data}) => {
  try {
    let res = await axios.patch(
      `https://mockserver-rny6.onrender.com/apple/${data.id}`,
      { ...data }
    );
    let resData=res.data;
    return resData;
  } catch (er) {
     console.log(er);
  }


};

export const DeleteDataApi = async (id) => {
  try {
    let res = await axios.delete(
      `https://mockserver-rny6.onrender.com/apple/${id}`
    );
    let data=res.data;
    return data;
  } catch (er) {
    console.log(er);
  }
};

export const PostDataApi=async(data)=>{
    try{
        let res=await axios.post('https://mockserver-rny6.onrender.com/apple',{...data})
        let data=res.data;
        return data;
    }
    catch(er){
        console.log(er)
    }
}


export const SingleProductPageApi=async(id)=>{
try{
let res=await axios.get(`https://mockserver-rny6.onrender.com/apple/${id}`);
console.log("hi",id,res.data)
return res.data;

}
catch(er)
{
  console.log(er)
}

}