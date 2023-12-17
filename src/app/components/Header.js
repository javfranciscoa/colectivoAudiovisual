import React, {forwardRef, useState} from 'react';
import styles from '../Page.module.css'
import Image from 'next/image'
import MenuButton from './MenuButton'
import {breakpoints} from '../utils/breakpoints'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'

const LogoContainer = styled.div``

 const Header = forwardRef(({transparentVideo, isHome, handleLogoClick}, ref) => {
 
  return (
    <>
    <div ref={ref} className={styles.header}>
      <div className={`${!isHome && styles.logo}`}>
        <Image src={'/logo.png'}  alt={'logo'}  width={200}
        height={65}></Image>
      </div>
      {window.innerWidth >= breakpoints.medium ? 
      (<div className={styles.menu}>
        <MenuButton text={'Nosotros'} href={'/nosotros'} transparentVideo={transparentVideo} />
        <MenuButton text={'Contacto'} href={'/contacto'} transparentVideo={transparentVideo}/>
      </div>) : (
      <LogoContainer className="logo-container" onClick={handleLogoClick}>
        <FontAwesomeIcon icon={faHamburger} size="2x" className="logo" />
      </LogoContainer> 
      )}
    </div>
    </>
  );
})

export default Header