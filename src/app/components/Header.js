import React, {forwardRef} from 'react';
import styles from '../Page.module.css'
import Image from 'next/image'
import MenuButton from './MenuButton'

 const Header = forwardRef(({transparentVideo, isHome}, ref) => {
  return (
    <>
    <div ref={ref} className={styles.header}>
      <div className={`${!isHome && styles.logo}`}>
        <Image src={'/logo.png'}  alt={'logo'}  width={200}
        height={65}></Image>
      </div>
      <div className={styles.menu}>
        <MenuButton text={'Nosotros'} href={'/nosotros'} transparentVideo={transparentVideo} />
        <MenuButton text={'Contacto'} href={'/contacto'} transparentVideo={transparentVideo}/>
      </div>
    </div>
    </>
  );
})

export default Header