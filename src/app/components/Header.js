import React, {forwardRef, useState} from 'react';
import styles from '../Page.module.css'
import Image from 'next/image'
import MenuButton from './MenuButton'
import {breakpoints} from '../utils/breakpoints'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'

const LogoContainer = styled.div`
z-index: 10;
cursor: pointer;
`

 const Header = forwardRef(({transparentVideo, isHome, handleLogoClick}, ref) => {
 
  return (
    <>
    <div ref={ref} className={styles.header}>
      <div onClick={() => typeof window !== 'undefined' ? window.location.href = "/" : null} className={`${!isHome && styles.logo} ${styles.goHome}`}>
        <Image src={'/logo.png'}  alt={'logo'}  width={200}
        height={65}></Image>
      </div>
      {typeof window !== 'undefined' && window?.innerWidth >= breakpoints.medium ? 
      (<div className={styles.menu}>
        <MenuButton text={'Nosotros'} href={'/about'} transparentVideo={transparentVideo} />
        <MenuButton text={'Contacto'} href={'/contact'} transparentVideo={transparentVideo}/>
      </div>) : (
      <LogoContainer onClick={handleLogoClick}>
        <FontAwesomeIcon icon={faBars} size="2x" className={styles.logoBurger} />
      </LogoContainer> 
      )}
    </div>
    </>
  );
})

export default Header