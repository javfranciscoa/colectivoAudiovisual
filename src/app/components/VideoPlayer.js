'use client'
import { useState, forwardRef } from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.css';

const VideoPlayer = forwardRef(({videoUrl, transparentVideo = true, isHome, isDetails = false}, forwardref) => {
    const [isPlaying, setIsPlaying] = useState(isDetails ? false : true);
  return (
    <div   ref={forwardref} className={`${isHome && styles.videoPlayer} ${isDetails && styles.containerCenterContent}`}>
      <div className={`${isDetails ? styles.normalPlayer : styles.playerWrapper} ${transparentVideo && styles.transparentVideo}`}>
        <ReactPlayer
          url={videoUrl}
          controls={isDetails ? true : false}
          playing={isPlaying}
          width='100%'
          loop
          height='auto'
          muted={isDetails ? false : true}
        />
      </div>

    </div>
  );
})

export default VideoPlayer;