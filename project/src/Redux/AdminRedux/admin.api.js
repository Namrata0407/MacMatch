import axios from "axios"



export const getAdminDataFromAPI =async ()=>{
const responce = await axios.get(`http://localhost:8080/products`)
return responce.data
};



export const postAdminDataFromAPI = async (payload)=>{
    const responce = await axios.post(`http://localhost:8080/products`,payload)
    return responce.data
}