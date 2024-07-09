"use client"
// PROJECT IMPORTS
import Hero from 'sections/landing/Header';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/Combo';
import Apps from 'sections/landing/Apps';

import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import ContactUs from 'sections/landing/ContactUs';
import Pricing1Page from 'views/price/Pricing1'
import About from 'sections/landing/About';

// ==============================|| LANDING PAGE ||============================== //

const Landing = () => {
  return (
    <>
      <Hero />
      <About/>
      <Technologies />
      <Combo />
      
      <Apps />
      <Pricing1Page />
      <Testimonial />
      <Partner />
      <ContactUs />
    </>
  );
};

export default Landing;
