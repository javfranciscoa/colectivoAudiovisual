"use client"
import React, { useState } from 'react';
import styles from './Page.module.css'
import VideoPlayer from './components/VideoPlayer';
import Head from 'next/head';
import MovieTitle from './components/MovieTitle'
import {listOfMovies} from './api/index'
import Header from './components/Header'

export default function Home() {

  const [videoUrl, setVideoUrl] = useState('http://groovevideo-videos-1647983592.s3.amazonaws.com/53ea1927-f41e-45cb-b1cf-2df1a756653c/groovevideo-5f30ec7c9e7126df3d46b74724305eb7.mp4');
  const [transparentVideo, changeTransparent] = useState(false)
  const handleClick = () => {

  }

  return (
    <div>
       <Head>
        <title>Video Player</title>
        <meta name="description" content="Productora visualmente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
    <main className={styles.myMain}>
      <Header transparentVideo={transparentVideo} isHome={true}/>
      <div className={styles.description}>
        <VideoPlayer videoUrl={videoUrl} transparentVideo={transparentVideo} isHome={true}/>  
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
    </main>

    </div>
  )
}
