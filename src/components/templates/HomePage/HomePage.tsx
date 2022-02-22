import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import HeroSection from '../../organisms/HeroSection/HeroSection';
import SectionProductDesc1 from '../../organisms/SectionProductDesc1/SectionProductDesc1';
import SectionProductDesc2 from '../../organisms/SectionProductDesc2/SectionProductDesc2';
import SectionProductDesc3 from '../../organisms/SectionProductDesc3/SectionProductDesc3';
import { Context } from '../../../providers/GeneralProvider';
import Button from '../../atoms/Button/Button';

const HomePageContainer = styled.div`
  //display: flex;
  //flex-direction: column;
  //align-items: center;
`;

// EXAMPLE - using media queries from our theme

// const ContainerSections = styled.div(
//   ({ theme: { up, down, between, breakpoint: b } }) => `
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0 auto;
//   ${up(b.s)} {
//     max-width: 550px;
//   }
//   ${up(b.m)} {
//     width: 90%;
//     max-width: 1440px;
//   }
//   ${between(b.m, b.l)} {
//     width: 90%;
//     max-width: 1440px;
//     background: black;
//   }
// `
// );

// SECOND EXAMPLE ->

const ContainerSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  ${({ theme: { up, breakpoint: b } }) => up(b.s)} {
    max-width: 550px;
  }
  ${({ theme: { up, breakpoint: b } }) => up(b.m)} {
    width: 90%;
    max-width: 1440px;
  }
  // $ {({ theme: { between, breakpoint: b } }) => between(b.m, b.l)} {
  //   width: 90%;
  //   max-width: 1440px;
  //   background: black;
  // }
`;

function HomePage(): JSX.Element {
  const [debugMode] = useState(false);
  const { example, setExample, example2, setExample2 } = useContext(Context);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ example, setExample, example2, setExample2 });
  }, [example, example2, setExample, setExample2]);

  return (
    <HomePageContainer>
      <HeroSection />
      {/* Example to present React Context */}
      {debugMode && (
        <>
          <Button text="Button" onClick={() => setExample((prev: boolean) => !prev)} />
          <Button text="Button2" onClick={() => setExample2((prev: boolean) => !prev)} />
        </>
      )}
      <ContainerSections>
        <SectionProductDesc1 />
        <SectionProductDesc2 />
        <SectionProductDesc3 />
      </ContainerSections>
    </HomePageContainer>
  );
}

export default HomePage;
