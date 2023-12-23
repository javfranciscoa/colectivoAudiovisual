import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#F0DBAF',
    padding: '0.8em',
    display: 'flex',
    'flex-direction': 'column',
  },
  bmItem: {
    'margin-bottom': '20px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const BurgerMenu = ({handleStateChange, menuOpen}) => {
    
  return (
    <>
    <Menu isOpen={menuOpen} styles={ styles } customBurgerIcon={ false }  right onStateChange={handleStateChange} >
      <a className="menu-item" href="/about">
        Nosotros
      </a>
      <a className="menu-item" href="/contact">
        Contacto
      </a>
    </Menu>
    </>
  );
};

export default BurgerMenu;