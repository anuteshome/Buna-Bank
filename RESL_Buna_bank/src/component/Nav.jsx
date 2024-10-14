import React from 'react';
import './Nav.css';
import {Link  as route} from 'react-router-dom';
import { Link } from 'react-scroll';
// import {Link} from 'react-ro'

const Hero = () => {
  return (
    <div className="header" id='Nav'>
    <div className='annnu'>
<h1 className='logo'>Buna</h1>
<div className="nav">
    <Link className='link' to="Nav"spy={true} smooth={true} duration={500}>Home</Link>
    <Link className='link' to="About_section" spy={true} smooth={true} duration={500}>About</Link>
    <Link className='link' to="test" spy={true} smooth={true} duration={500}>Testimonial</Link>
    <Link className='link' to="Contact_us" spy={true} smooth={true} duration={500}>Contact us</Link>


</div>
<div className="Login">
<a href="login"><button className='btnLogin'>Login</button></a>
</div>
  </div> 

  </div>



  );
};

export default Hero;