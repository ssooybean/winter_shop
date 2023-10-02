import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../components/CoverVideo';
import Navigate from '../components/Navigate';
import Logotype from '../components/Logotype';

const Section = styled.section`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-color: black;
`;
export default function Home({ scroll }) {
  return (
    <Section id='home'>
      <Logotype />
      <Navigate scroll={scroll} />
      <CoverVideo />
    </Section>
  );
}
