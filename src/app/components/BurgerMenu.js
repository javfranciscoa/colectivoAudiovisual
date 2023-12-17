import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu = ({handleStateChange, menuOpen}) => {
    
  return (
    <>
    <Menu isOpen={menuOpen} customBurgerIcon={ false }  right onStateChange={handleStateChange} >
        
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
    </>
  );
};

export default BurgerMenu;