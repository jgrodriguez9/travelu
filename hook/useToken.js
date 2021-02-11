import React, { useState } from "react";

 export default function useToken(){
    const [token, setToken] = useState(null)
    if (typeof window !== "undefined"){
        if(localStorage.getItem("authTravelU")===null){
            //hacemos la peticion para buscar el token
            console.log('buscando token')
        }else{
            setToken(localStorage.getItem("authTravelU").access_token)
        }
    
        return token;
    }
   
}