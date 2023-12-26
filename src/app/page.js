"use client"
import React, { useState } from 'react';
import styles from './Page.module.css'
import VideoPlayer from './components/VideoPlayer';
import Head from 'next/head';
import MovieTitle from './components/MovieTitle'
import {listOfMovies} from './api/index'
import Header from './components/Header'
import {breakpoints} from './utils/breakpoints'
import BurgerMenu from './components/BurgerMenu';
import Footer from './components/Footer';
import styled from 'styled-components';

const FooterContainer = styled.div`
position: absolute;
bottom: 0;
width: 100vw;
`


export default function Home() {

  const [videoUrl, setVideoUrl] = useState('http://groovevideo-videos-1647983592.s3.amazonaws.com/53ea1927-f41e-45cb-b1cf-2df1a756653c/groovevideo-5f30ec7c9e7126df3d46b74724305eb7.mp4');
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
  const [transparentVideo, changeTransparent] = useState(true)
  const handleClick = () => {

  }

  console.log(transparentVideo, 'tr')

  return (
    <div>
       <Head>
        <title>Video Player</title>
        <meta name="description" content="Productora visualmente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
    <main className={styles.myMain}>
    <BurgerMenu handleStateChange={handleStateChange} menuOpen={menuOpen}/>
      <div className={styles.description}>
        {typeof window !== 'undefined' && window?.innerWidth >= breakpoints.xlarge && <VideoPlayer videoUrl={videoUrl} transparentVideo={transparentVideo} isHome={true}/>  }
       <div className={styles.centeredList}>
       <ul className={styles.list}>
            {listOfMovies.map(( movie, index) => (
                <li key={`key ${movie.title}`}>
                  <MovieTitle index={index} onClick={handleClick} title={movie.title} link={movie.link} 
                  changeTransparent={changeTransparent} setVideoUrl={setVideoUrl}subtitle={movie.subtitle}/>
                  </li>
            ))}
             </ul>
       </div>
     
      </div>
     <Header transparentVideo={transparentVideo} isHome={true} handleLogoClick={handleLogoClick}/>
  
      <FooterContainer>
      <Footer/>
      </FooterContainer>
    </main>

    </div>
  )
}
