import { createContext, useState } from "react";

export const AuthContext=createContext();

export  const AuthContextProvider=({children})=>{

    const [isAuth,setisAuth]=useState("true");

    const handleChange=()=>{
        {isAuth=== "true" ?  setisAuth("false") : setisAuth("true")}
    }

    return (
     <AuthContext.Provider value={{isAuth,handleChange}}>
    {children}
     </AuthContext.Provider>   
    )
}