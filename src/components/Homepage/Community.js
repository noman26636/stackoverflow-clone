import React, { useContext } from 'react'
import { ThemeContext } from '../../context';
import "./Community.css"


const Community = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='community'>
        <div className='communityContainers'>
            <div className='communityContainer'>
                <h1 style={{color : darkMode && '#ffa65e'}}>100+ million</h1>
                <h2 style={{color : darkMode && '#c4c8cc'}}>monthly visitors to stack Overflow & Stack Exchange</h2>
            </div>
        </div>
        <div className='communityContainers'>
            <div className='communityContainer'>
                <h1 style={{color : darkMode && '#ffa65e'}}>45+ billion</h1>
                <h2 style={{color : darkMode && '#c4c8cc'}}>Times a developer got help since 2008</h2>
            </div>
        </div>
        <div className='communityContainers'>
            <div className='communityContainer'>
               <h1 style={{color : darkMode && '#ffa65e'}}>179% ROI</h1>
               <h2 style={{color : darkMode && '#c4c8cc'}}>from companies using Stack Overflow for Teams</h2>
            </div>
        </div>
        <div className='communityContainers'>
            <div className='communityContainer'>
               <h1 style={{color : darkMode && '#ffa65e'}}>5000+</h1>
               <h2 style={{color : darkMode && '#c4c8cc'}}>Stack Overflow for Teams instances active every day</h2>
            </div>
        </div>
    </div>
  )
}

export default Community