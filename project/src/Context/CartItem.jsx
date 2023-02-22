import { createContext } from "react";
import axios from "axios";

export const CartItem = createContext();

export const CartItemProvider = ({children}) =>{
    const handleAddCart = (data) => {
        return axios.post(`http://localhost:8080/cart`,{
            name: data.name,
            image: data.image,
            price: data.price,
            type:data.type,
            originalprice:data.originalprice,
        })
    }
    const deleteCart = (id) => {
        return axios.delete(`http://localhost:8080/cart/${id}`);
    };

    return <CartItem.Provider value={{handleAddCart,deleteCart}}>{children}</CartItem.Provider>
}
 