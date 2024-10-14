import React from 'react'
import { useState } from 'react';
import './about.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
function Detail() {
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <div id='About_section'>
      <div className="about" >
        <div className="image">
        <AccountBalanceIcon style={{ fontSize: '400px', color: 'wheat', marginTop:'4rem', marginLeft:'3rem' }} />
        </div>
        <div className="text">
            <h1 className='about_title'>Buna Bank</h1>
            {/*  */}
            {/* <div
            className={`container ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            Hover over me!
        </div> */}
        {/*  */}
            <p className='about_p'>At Buna, we understand that life can bring unexpected financial challenges. Whether you're looking to consolidate debt, finance a major purchase, or cover unexpected expenses, we're here to help.

Our dedicated team is committed to providing you with personalized service and tailored loan solutions that meet your unique needs. With competitive rates and flexible terms, we aim to make the borrowing process simple and stress-free.

Explore our range of loan options, and let us assist you in taking the next step toward achieving your financial goals. Your future starts here!

Thank you for choosing Buna. We're excited to partner with you on your financial journey!</p>
                
                 <button className='btn2'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
