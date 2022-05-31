import React, { useContext } from 'react'
import "./Toggle.css"
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.png"
import { ThemeContext } from '../../context'

const Toggle = () => {

   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;

   const handleClick = () =>{
       theme.dispatch({type : "TOGGLE"});
   }
   
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon"/>
      <img src={Moon} alt="" className="t-icon" />
      <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : "25px", backgroundImage: darkMode && 'linear-gradient(90deg, rgb(250, 129, 66), rgb(255, 64, 136))'}}></div>
    </div>
  )
}

export default Toggle
