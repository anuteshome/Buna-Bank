// Home.js
import React from 'react';
import Nav from '../component/Nav';
import Hero from '../component/Hero/Hero';
import Detail from '../component/About/about';
import Testis from '../component/Testimonial/Testimonial';
import Message from '../component/Contact/message';
import Footer from '../component/footer/footer';
import Sidebar from './Admiin/Sidebar';
import Homee from './Admiin/main/main';
import Dashboard from './Admiin/Dash/Dash';

function Home() {
  return (
    <div>
 <Nav/>
 <Hero/>
 <Detail/>
 <Testis/>
 <Message/>
 <Footer/>
 {/* <Dashboard/> */}
    </div>
  );
}

export default Home;