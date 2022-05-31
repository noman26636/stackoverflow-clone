import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import Toggle from "../toggle/Toggle";
import "./Navbar.css";

const Navbar = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="navbar" style={{backgroundColor : darkMode && '#2a2e35', color: darkMode && '#b2becd',boxShadow: darkMode && '0px 1px 3px black'}}>
      {/* Left  */}

      <div className="left">
          <a href="/">
        <img
           style={{}}
          className="leftLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
          alt=""
        />
        </a>
        <div className="leftItems">
          <h3 className="leftItem" style={{color: darkMode && 'gray'}}>About</h3>
          <h3 className="leftItem" style={{color: darkMode && 'gray'}}>Products</h3>
          <h3 className="leftItem" style={{color: darkMode && 'gray'}}>Teams</h3>
        </div>
      </div>

      {/* Middle  */}

      <div className="middle">
        <div className="searchContainer" style={{backgroundColor: darkMode && '#2d2d2d',border : darkMode && '1px solid gray'}}>
        <i className="searchIcon fa-solid fa-magnifying-glass" style={{color: darkMode && 'gray'}}></i>  
        <input type="text" placeholder="Search..." style={{backgroundColor: darkMode && '#2d2d2d'}}/>
        </div>
      </div>

      {/* Right  */}

      <div className="right">
        <div className="buttons">
          <button className="button" style={{backgroundColor : darkMode && '#2d2d2d', color : darkMode && 'white', border : darkMode && '1px solid gray'}}>Log in</button>
          <button className="button btn1" style={{backgroundColor : darkMode && '#2d2d2d', color : darkMode && 'gray', border : darkMode && '1px solid gray'}}>Sign up</button>
        </div>
        <Toggle/>

      </div>

    </div>
  );
};

export default Navbar;
