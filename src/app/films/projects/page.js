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

const Container = styled.div`
position: absolute;
top: 0;
left: 0;
overflow: hidden;
height: 50vh;
width: 100%;
`;

const Title = styled.h1`
font-family: ${anton.style.fontFamily};
color: #fff;
z-index: 4;
`

const SubTitle = styled.h1`
font-family: ${oswald.style.fontFamily};
color: #fff;
z-index: 4;
margin-top: 10px;
`
const TextContainer = styled.div`
position: absolute; 
top: 60%;
left: 20%; 
transform: translate(-50%, -50%);
`
const InfoText = styled.h3`
font-family: ${oswald.style.fontFamily};
color: #fff;
z-index: 4;
margin-top: 10px;
`

const QuoteText = styled.h3`
font-family: ${oswald.style.fontFamily};
color: black;
z-index: 4;
font-size: 54px;
padding-bottom: 10vh;
padding-top: 10vh;
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
padding-bottom: 5vh;
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
max-width: 176px;
margin: 0 50px;
min-width: 200px;
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
  const [sectionTwoHeigh, setSectionTwoHeigh] = useState(null)
  const headerSize = useRef(null)

  const searchParams = useSearchParams()

  const index = searchParams.get('index')

  useLayoutEffect(() => {
    if(headerSize?.current?.clientHeight){
      setSectionTwoHeigh(window.innerHeight / 2 - headerSize?.current?.clientHeight)
    }

  }, [sectionTwoHeigh])


  return (
    <MainContainer>
        <Header ref={headerSize} transparentVideo={true} isHome={false}/>
        <Container >
          <VideoPlayer videoUrl={listOfMovies[index].url} transparentVideo={false} isHome={false}/> 
          <TextContainer>
            <Title >{listOfMovies[index].title}</Title>
            <SubTitle>{listOfMovies[index].direccion}</SubTitle>
            <InfoText>{listOfMovies[index].info}</InfoText>
          </TextContainer>
        </Container>
        {!!sectionTwoHeigh && <SectionSinopsis sizeHeigh={sectionTwoHeigh}> 
          {listOfMovies[index].quote && <QuoteText >{listOfMovies[index].quote}</QuoteText>
          
          }
          {listOfMovies[index].sinopsis && <SinopsisText >{listOfMovies[index].sinopsis}</SinopsisText>}
          <VideoPlayer videoUrl={listOfMovies[index].url} transparentVideo={false} isHome={false} isDetails={true}/> 
          <QuoteText >{'Trayectoria del proyecto'}</QuoteText>
          {listOfMovies[index].trayectoria && <SinopsisText >{listOfMovies[index].trayectoria}</SinopsisText>}
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
