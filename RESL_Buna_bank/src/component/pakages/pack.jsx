import React from 'react'
import './pack.css'
import {Link } from 'react-router-dom'

function Pack() {
  return (
    <div className='pack'>
        <h1 className='pa'>Packages</h1>
      <div className="cards">
      
        <div className="c1">
<h1 className='num'>1</h1><span>Years</span><br/><br/>
<Link to="/req"><button className='btnp'>Open</button></Link>
        </div>
        <div className="c2">
        <h1  className='num'>3</h1><span>Years</span>
        <Link to="/req"><button className='btnp'>Open</button></Link>

            </div>
            <div className="c3">
            <h1  className='num'>5</h1><span>Years</span>
            
            </div>
      </div>
    </div>
  )
}

export default Pack
