// components/ImageCarousel.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowIcon from './Arrow';


const Container = styled.div``

const Image = styled.img`
display: block;
margin: auto;
width: 60vw;
`
const MainContainer = styled.div`
position: relative;
margin: 10vh auto;
max-width: 90vw; 
`
const RigthArrow = styled.div`
position: absolute;
    top: 50%;
    font-size: 24px;
    cursor: pointer;
    transform: translateY(-50%);
    left: 90%;

`

const LeftArrow = styled.div`
position: absolute;
    top: 50%;
    font-size: 24px;
    cursor: pointer;
    transform: translateY(-50%) rotate(180deg);
 
    right: 90%;
    z-index: 100;
`
const ImageCarousel = ({ images }) => {

    const sliderRef = useRef(null);

   const settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     lazyLoad: true,
   };


  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <MainContainer>
        <LeftArrow onClick={handlePrev}>
    <ArrowIcon />
    </LeftArrow>
    <Slider ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <Container key={index}>
          <Image src={image} alt={`Slide ${index + 1}`} />
        </Container>
      ))}
    </Slider>
    <RigthArrow onClick={handleNext}>
    <ArrowIcon />
    </RigthArrow>
    </MainContainer>
  );
};

export default ImageCarousel;