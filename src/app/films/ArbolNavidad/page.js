'use client'
import React, { useLayoutEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import {listOfMovies} from '../../api/index'
import VideoPlayer from '../../components/VideoPlayer';
import styled from 'styled-components';
import { anton, oswald } from '../../utils/fonts/'
import { useSearchParams } from 'next/navigation'

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

const SinopsisText = styled.p`
font-family: ${oswald.style.fontFamily};
color: black;
z-index: 4;
font-size: 20px;
margin-bottom: 10vh;
`


const SectionSinopsis = styled.div`
text-align: center;
${ props => !!props.sizeHeigh ?  'margin-top:' + props.sizeHeigh + 'px;' : null  }
`
const MainContainer = styled.div`
  background-color: #f1f3f9;
`

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
        </SectionSinopsis>}
       
        
    </MainContainer>
  );
}
