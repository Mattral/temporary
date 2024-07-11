"use client"
"use client"
// PROJECT IMPORTS
import Hero from 'sections/landing/Header';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/Combo';
import Apps from 'sections/landing/Apps';
//import Testimonial from 'sections/landing/Testimonial';<Testimonial />
import Partner from 'sections/landing/Partner';
//import ContactUs from 'sections/landing/ContactUs';<ContactUs />
import SimpleLayout from 'layout/SimpleLayout';
import Pricing1Page from 'views/price/Pricing1'
import About from 'sections/landing/About';
import FooterBlock from 'sections/landing/FB';


// ==============================|| LANDING PAGE ||============================== //

const Landing = () => (
  <SimpleLayout>
    <Hero />
    <About/>
    <Technologies />
    <Combo />
    
    <Apps />
    <Pricing1Page />
    
    <Partner />
    
    <FooterBlock/>
  </SimpleLayout>
);

export default Landing;

