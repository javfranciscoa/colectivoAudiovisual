'use client'
import React from 'react'
import styles from '../Page.module.css'
import {anton, oswald} from '../utils/fonts/'
import {listOfMovies} from '../api/index'
import Link from 'next/link'
  
const MovieTitle = ({handleClick, title, subtitle, index, setVideoUrl, changeTransparent, link}) => {

    const handleHover = () => {
        setVideoUrl(listOfMovies[index].url)
        changeTransparent(false)
    };
  
    const handleMouseLeave = () => {
        changeTransparent(true)
    };
  
    return (
    <div  
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className={styles.container} 
        onClick={handleClick}
    >
        <Link   
         className={styles.title} 
         href={`${link}?index=${index}`}
        >
          <h1 className={`${styles.moviesTitles} ${anton.className}` }>{title}</h1>
          <h2 className={`${styles.moviesTitles} ${oswald.className}`  }>{subtitle}</h2>
        </Link>
    </div>)
}

export default MovieTitle