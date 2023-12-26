'use client'
import React, {useState} from 'react'
import { ContactUs } from "@/components/contactus";
import Footer from '../components/Footer';
import Header from '../components/Header'
import BurgerMenu from '../components/BurgerMenu';

const Contact = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => {
      setMenuOpen(state.isOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };
  
    const handleLogoClick = () => {
      // Add any specific actions you want to perform when the logo is clicked
      // For now, just close the menu
      setMenuOpen( prev => !prev)
    };
    return <>
     <BurgerMenu handleStateChange={handleStateChange} menuOpen={menuOpen}/>
    <Header  transparentVideo={true} isHome={false} handleLogoClick={handleLogoClick}/>
    <ContactUs />
    <Footer></Footer>
    </>
}

export default Contact