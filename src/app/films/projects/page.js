'use client'
import React, { useLayoutEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import { listOfMovies } from '../../api/index'
import VideoPlayer from '../../components/VideoPlayer';
import styled from 'styled-components';
import { anton, oswald } from '../../utils/fonts'
import { useSearchParams } from 'next/navigation'
import ImageCarousel from '../../components/ImageCarousel';
import Footer from '../../components/Footer'
import { media } from '../../utils/breakpoints'
import {breakpoints} from '../../utils/breakpoints'
import BurgerMenu from '../../components/BurgerMenu';


const Container = styled.div`
position: absolute;
top: 0;
left: 0;
overflow: hidden;
height: 50vh;
width: 100%;
`;

const responsiveness = `

${media.small} {
  font-size: 1rem; /* Adjust font size for medium screens */
  }
${media.medium} {
  font-size: 1.2rem; /* Adjust font size for medium screens */
  }
  
  ${media.large}{
  font-size: 1.5rem; /* Adjust font size for large screens */
  }
  
  ${media.xlarge}{
  font-size: 2rem; /* Adjust font size for extra-large screens */
  }`

const Title = styled.h1`
font-family: ${anton.style.fontFamily};
color: #fff;
z-index: 4;
font-size: 1rem;
${responsiveness}
`

const SubTitle = styled.h1`
font-family: ${oswald.style.fontFamily};
color: #fff;
z-index: 4;
margin-top: 10px;
font-size: 1rem;
${responsiveness}
}
`
const TextContainer = styled.div`
position: absolute; 

left: calc(50% - ${typeof window !== 'undefined' && window?.innerWidth * 0.4}px);
${media.extraSmall} {
  top: 40%;
  }
${media.small} {
  top: 40%;
  }
${media.medium} {
  top: 60%;
  }
  
  ${media.large}{
    top: 60%;
  }
  
  ${media.xlarge}{
    top: 60%;
  }`



const InfoText = styled.h3`
font-family: ${oswald.style.fontFamily};
color: #fff;
z-index: 4;
margin-top: 10px;
font-size: 1rem;
${responsiveness}
`

const QuoteText = styled.h3`
font-family: ${oswald.style.fontFamily};
color: black;
z-index: 4;
font-size: 54px;
padding-bottom: 10vh;
padding-top: 10vh;
${media.extraSmall} {
  font-size: 20px;
  padding-bottom: 10%;
  padding-top: ${(props) => props?.paddingTop ? props?.paddingTop : '0'};
  }
${media.small} {
  font-size: 22px;
  padding-bottom: 10%;
  padding-top: ${(props) => props?.paddingTop ? props?.paddingTop : '0'};
  }
${media.medium} {
  font-size: 30px;
  padding-bottom: 10%;
  padding-top: ${(props) => props?.paddingTop ? props?.paddingTop : '0'};
  }
  
  ${media.large}{
    font-size: 40px;
    padding-bottom: 10%;
    padding-top: ${(props) => props?.paddingTop ? props?.paddingTop : '10vh'};
  }
  
  ${media.xlarge}{
    font-size: 54px;
    padding-bottom: 10%;
    padding-top: ${(props) => props?.paddingTop ? props?.paddingTop : '10vh'};
  }
`

const SubtitleText = styled.p`
font-family: ${oswald.style.fontFamily};
color: black;
font-size: 20px;
padding-bottom: 1vh;
padding-top: 1vh;
text-align: start;
`

const SinopsisText = styled.p`
font-family: ${oswald.style.fontFamily};
color: black;
z-index: 4;
font-size: 20px;
padding-bottom: ${(props) => props.isQuote ? '0' : '10vh'};
padding-top: ${(props) => props.isQuote ? '0' : '10vh'};
`
const TrajectoryText = styled.p`
font-family: ${oswald.style.fontFamily};
color: black;
z-index: 4;
font-size: 20px;
`


const SectionSinopsis = styled.div`
text-align: center;
${ props => !!props.sizeHeigh ?  'margin:' + props.sizeHeigh + 'px' + ' 16vw 10vh;' : null  }
`
const MainContainer = styled.div`
  background-color: #f1f3f9;
  width: 100%;
`

const CrewContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Crew = styled.div`

${media.extraSmall} {
  flex: 0 0 100%;
  }
${media.small} {
  flex: 0 0 100%;
  }
${media.medium} {
  flex: 0 0 100%;
  }
  
  ${media.large}{
    max-width: 176px;
margin: 0 50px;
min-width: 200px;
  }
  
  ${media.xlarge}{
    max-width: 176px;
    margin: 0 50px;
    min-width: 200px;
  }

`
const DepartmentTitle = styled.p`
font-family: ${oswald.style.fontFamily};
color: rgba(0,0,0,0.31);
z-index: 4;
font-size: 20px;`
const DepartmentDescription = styled.p`font-family: ${oswald.style.fontFamily};
color: black;
z-index: 4;
font-size: 20px;`



export default function Movie({}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const [sectionTwoHeigh, setSectionTwoHeigh] = useState(null)
  const headerSize = useRef(null)

  const searchParams = useSearchParams()

  const index = searchParams.get('index')

  useLayoutEffect(() => {
    if(headerSize?.current?.clientHeight){
      setSectionTwoHeigh(typeof window !== 'undefined' && window?.innerHeight / 2 - headerSize?.current?.clientHeight)
    }

  }, [sectionTwoHeigh])

  const handleLogoClick = () => {
    // Add any specific actions you want to perform when the logo is clicked
    // For now, just close the menu
    setMenuOpen( prev => !prev)
  };

  console.log(!!listOfMovies[index].quote, 'te')

  return (
    <MainContainer>
          <BurgerMenu handleStateChange={handleStateChange} menuOpen={menuOpen}/>
        <Header ref={headerSize} transparentVideo={true} logoWhite={true} handleLogoClick={handleLogoClick} isHome={false}/>
        <Container >
          <VideoPlayer videoUrl={listOfMovies[index].url} transparentVideo={false} isHome={false}/> 
          <TextContainer>
            <Title >{listOfMovies[index].title}</Title>
            <SubTitle>{listOfMovies[index].direccion}</SubTitle>
            <InfoText>{listOfMovies[index].info}</InfoText>
          </TextContainer>
        </Container>
        {!!sectionTwoHeigh && <SectionSinopsis sizeHeigh={typeof window !== 'undefined' && window?.innerWidth <= breakpoints.xlarge ?  headerSize?.current?.clientHeight : sectionTwoHeigh}> 
          {listOfMovies[index].quote && <QuoteText >{listOfMovies[index].quote}</QuoteText>
          
          }
          {listOfMovies[index].sinopsis && <SinopsisText isQuote={!!listOfMovies[index].quote} >{listOfMovies[index].sinopsis}</SinopsisText>}
          <VideoPlayer videoUrl={listOfMovies[index].url} transparentVideo={false} isHome={false} isDetails={true}/> 
          <QuoteText paddingTop={20} >{'Trayectoria del proyecto'}</QuoteText>
          {listOfMovies[index].trayectoria && <TrajectoryText >{listOfMovies[index].trayectoria}</TrajectoryText>}
          {/* <SubtitleText >{'Festivales:'}</SubtitleText> */}
          <QuoteText >{'Ficha técnica'}</QuoteText>
          <CrewContainer>
          {listOfMovies[index]?.crew?.length > 0 && listOfMovies[index].crew.map( crew => 
            <Crew>
              <DepartmentTitle>{crew.title}</DepartmentTitle>
              <DepartmentDescription>{crew.description}</DepartmentDescription>
            </Crew>
        )} 
          </CrewContainer>
        </SectionSinopsis>
         
        }
        <ImageCarousel images={listOfMovies[index]?.carouselImages} />
        <Footer/>
    </MainContainer>
  );
}
