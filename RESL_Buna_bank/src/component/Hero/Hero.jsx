import React from 'react'
import './Hero.css'
import buna from '../images/buna2.png'

function Hero() {
  return (
    <div className='hero-main' id='hero'>
      <div>
<h1 className='gust'> Fast and easy Loan system<br/> Buna Bank</h1>
<p className='fp'>unlock your financial potential with our flexible loan solutions. Whether you’re looking to consolidate debt, fund a project, or make a big purchase, we’re here to help you every step of the way. Fast approvals, competitive rates, and personalized service await you!.</p>
  <a href='/Login'><button className='btn-loan'>Loan</button></a>
      </div>
      <div>
<img className='img1' src={buna} alt='buna'/>
      </div>
    </div>
  )
}

export default Hero
