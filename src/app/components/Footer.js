import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faVimeo, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import styles from './Footer.module.css';

const Link = styled.a``

const FooterContainer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
height: 10vh;
`

const Footer = ({isAboutUs = false}) => {
  return (
    <FooterContainer >
      <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className={`${isAboutUs ? styles.iconBlack : styles.icon}`} />
      </Link>
      <Link href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faVimeo} className={`${isAboutUs ? styles.iconBlack : styles.icon}`} />
      </Link>
      <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className={`${isAboutUs ? styles.iconBlack : styles.icon}`} />
      </Link>
      <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className={`${isAboutUs ? styles.iconBlack : styles.icon}`} />
      </Link>
    </FooterContainer>
  );
};

export default Footer;