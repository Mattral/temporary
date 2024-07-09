"use client"
// PROJECT IMPORTS
import Hero from 'sections/landing/Header';
import Technologies from 'sections/landing/Technologies';
import About from 'sections/landing/About';
import Combo from 'sections/landing/Combo';
import Apps from 'sections/landing/Apps';

import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import ContactUs from 'sections/landing/ContactUs';
import FooterBlock from 'sections/landing/FB'
import Pricing1Page from 'views/price/Pricing1'

// ==============================||  ||============================== //

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Combo />
      <Apps />
      <Pricing1Page />
      <Testimonial />
      <Partner />
      <ContactUs />
      <FooterBlock />
    </>
  );
};

export default Landing;

