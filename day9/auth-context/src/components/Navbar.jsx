import React from 'react'
import {AuthContext} from "../contexts/AuthContext";
import { useContext } from "react";
import styled from 'styled-components';
const Navbar = () => {
    const {isAuth,handleChange}=useContext(AuthContext);
  return (
    <NavBar>
        {isAuth=="true" ? <p>Logged out</p> : <p>Logged in</p>}:{isAuth=== "true" ? <Button onClick={()=>{
           handleChange()
        }}>Logout</Button> : <Button onClick={()=>{
            handleChange()
         }}>Login</Button> }
    </NavBar>
  )
}
const Button =styled.button`
        border:"1px solid red";
        padding:"10px";
        font-size:"25px";
        margin:"10px"  
`
const NavBar=styled.div`
        display:"flex";
        justify-content:"center";
        border:"1px solid red";
        padding:"10px";
        font-size:"25px";
        margin:"10px"

    
`
export default Navbar