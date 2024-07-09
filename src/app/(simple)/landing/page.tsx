"use client"
// PROJECT IMPORTS
import Hero from 'sections/landing/Header';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/Combo';
import Apps from 'sections/landing/Apps';
import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import ContactUs from 'sections/landing/ContactUs';
import SimpleLayout from 'layout/SimpleLayout';
import Pricing1Page from 'views/price/Pricing1'
import About from 'sections/landing/About';


// ==============================|| LANDING PAGE ||============================== //

const Landing = () => (
  <SimpleLayout>
    <Hero />
    <About/>
    <Technologies />
    <Combo />
    
    <Apps />
    <Pricing1Page />
    <Testimonial />
    <Partner />
    <ContactUs />
  </SimpleLayout>
);

export default Landing;


/*"use client"
// PROJECT IMPORTS
import dynamic from 'next/dynamic';
import About from 'sections/landing/About';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/Combo';
import Apps from 'sections/landing/Apps';
import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import ContactUs from 'sections/landing/ContactUs';
//import FooterBlock from 'sections/landing/FB';
import Pricing1Page from 'views/price/Pricing1';

// ==============================|| LANDING PAGE ||============================== //

const Hero = dynamic(() => import('sections/landing/Header'), { ssr: false });
const Footer = dynamic(() => import('sections/landing/FB'), { ssr: false });

const Landing = () => {
  return (
    <>
      {typeof window !== "undefined" && <Hero />}
      <About />
      <Technologies />
      <Combo />
      <Apps />
      <Pricing1Page />
      <Testimonial />
      <Partner />
      <ContactUs />
      {typeof window !== "undefined" && <Footer />}
    </>
  );
};

export default Landing;
*/