import React from 'react'
import "./ROICarts.css"

const ROICarts = () => {
  return (
    <div className='roiCarts'>
        <div className='roiCart'>
            <p className='roiCart_desc'>A Forrester Consulting study shows <span>179% return on investment</span> with Stack Overflow for Teams.</p>
        </div>
        <div className='roiCart'>
            <p className='roiCart_desc'>The world’s largest telecom firm <span>saved $10M</span> in deflected support cases with our centralized knowledge base.</p>
        </div>
        <div className='roiCart'>
            <p className='roiCart_desc'>Subject-matter experts at software platform Unqork had <span>27% more time</span> to work on projects after using Teams.</p>
        </div>
        <div className='roiCart'>
            <p className='roiCart_desc' style={{width : '200px'}}>You can save time and money with Stack Overflow for Teams.</p>
            <button className='roiButton' style={{padding : '10px 32px'}}>Calculate your ROI</button>
        </div>
    </div>
  )
}

export default ROICarts