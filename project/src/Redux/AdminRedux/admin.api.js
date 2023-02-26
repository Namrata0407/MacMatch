import axios from "axios"



export const getAdminDataFromAPI =async (payload)=>{
    console.log(payload)
const responce = await axios.get(`https://mockserver-rny6.onrender.com/apple`,payload)
// console.log(responce.headers["x-total-count"])
return {data: responce.data, totoalPages: Number(responce.headers['x-total-count'])/(payload.params._limit)}
// return responce.data

};



export const postAdminDataFromAPI = async (payload)=>{
    const responce = await axios.post(`https://mockserver-rny6.onrender.com/apple`,payload)
    return responce.data
};


export const editAdminDataFromAPI = async (id,payload)=>{
 const responce = await axios.patch(`https://mockserver-rny6.onrender.com/apple/${id}`,payload)
 return responce.data
}

export const deleteAdminDataformAPI = async(id)=>{
    const responce = await axios.delete(`https://mockserver-rny6.onrender.com/apple/${id}`)

    return responce.data
};



//for users

export const getAdminUserDataFromAPI = async()=>{
    const responce = await  axios.get(`https://mockserver-rny6.onrender.com/usersData`);
    return responce.data
}


export const deleteAdminUserDataFromAPI = async(id)=>{
    const responce = await axios.delete(`https://mockserver-rny6.onrender.com/usersData/${id}`)
    return responce.data
}

//for order 

export const getAdminOrderDataFromAPI = async ()=>{
    const responce = await axios.get(`https://mockserver-rny6.onrender.com/orders`)
    return responce.data
}