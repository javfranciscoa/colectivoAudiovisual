'use client'
import React, {useState} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
import BurgerMenu from '../components/BurgerMenu';
import {OurTeam} from '../../components/our-team'

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
    return <div className="h-screen flex flex-col relative bg-secundary">
     <BurgerMenu handleStateChange={handleStateChange} menuOpen={menuOpen}/>
    <Header logoWhite={true} transparentVideo={true} isHome={false} handleLogoClick={handleLogoClick}/>
    <OurTeam />
    <Footer isAboutUs={true}></Footer>
    </div>

}

export default Contact