import axios from "axios";
import jwtDecode from "jwt-decode";
export function Login(data,callback){
    axios.post('https://fakestoreapi.com/auth/login' , data)
    .then((Response)=>{
        callback(true,Response.data.token)
    })
    .catch((error)=>{
        callback(false,error)
    })
}

export const getUsername = (token)=>{
    const decoded = jwtDecode(token)
    return decoded.user
}