import Logo from "../images/Picture1.png"
import './Appform.css'
import React from 'react'
import { Appform } from "./Appform"
export const Header = () => {
  return (
   
     
    <header className="headtop">
        <img src={Logo} alt=''></img>
        <a href='/'>Home</a>
        <Appform />
    </header>
            
        
  )
}

 
