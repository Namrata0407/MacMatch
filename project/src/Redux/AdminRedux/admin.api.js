import axios from "axios"



export const getAdminDataFromAPI =async (payload)=>{
const responce = await axios.get(`http://localhost:8080/products`,payload)
// console.log(responce.headers["x-total-count"])
return {data: responce.data, totoalPages: Number(responce.headers['x-total-count'])/(payload.params._limit)}
// return responce.data

};



export const postAdminDataFromAPI = async (payload)=>{
    const responce = await axios.post(`http://localhost:8080/products`,payload)
    return responce.data
};


export const editAdminDataFromAPI = async (id,payload)=>{
 const responce = await axios.patch(`http://localhost:8080/products/${id}`,payload)
 return responce.data
}

export const deleteAdminDataformAPI = async(id)=>{
    const responce = await axios.delete(`http://localhost:8080/products/${id}`)

    return responce.data
};



//for users

export const getAdminUserDataFromAPI = async()=>{
    const responce = await  axios.get(`http://localhost:8080/users`);
    return responce.data
}


export const deleteAdminUserDataFromAPI = async(id)=>{
    const responce = await axios.delete(`http://localhost:8080/users/${id}`)
    return responce.data
}

//for order 

export const getAdminOrderDataFromAPI = async ()=>{
    const responce = await axios.get(`http://localhost:8080/orders`)
    return responce.data
}