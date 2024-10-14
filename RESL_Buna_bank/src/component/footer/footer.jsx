import React from 'react'
import './footer.css'
import { Link } from 'react-scroll';

function Footer() {
  return (
    <div className='foot'>
      <div>
<h1 className='log'>Buna</h1>
      </div>
      {/*  */}
      <div className="route">
      
      <Link className='lin' to="Nav"spy={true} smooth={true} duration={500}>Home</Link>
    <Link className='lin' to="About_section" spy={true} smooth={true} duration={500}>About</Link>
    <Link className='lin' to="test" spy={true} smooth={true} duration={500}>Testimonial</Link>
    <Link className='lin' to="/packages" spy={true} smooth={true} duration={500}>Packages</Link>
    <Link className='lin' to="Contact_us" spy={true} smooth={true} duration={500}>Contact us</Link>


      </div>

    </div>
  )
}

export default Footer
