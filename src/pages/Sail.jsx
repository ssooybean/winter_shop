import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SailCards from '../components/SailCards';
import sail from '../store/sail.json';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  position: relative;
  margin-bottom: 9rem;
`;
const Title = styled.h1`
  text-align: center;

  font-family: 'Motserrat', sans-serif;
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};

  @media screen and (min-width: 2000px) {
    position: absolute;
    font-size: ${(props) => props.theme.fontxxxl};
    top: -17rem;
    left: 40%;
  }
`;
const CardsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 150px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 22rem);
  grid-template-rows: 35rem;
  grid-column-gap: 45px;
  grid-row-gap: 45px;
  justify-content: center;
  justify-items: center;
  align-items: stretch;

  @media screen and (min-width: 2000px) {
    grid-template-columns: repeat(auto-fill, 600px);
    grid-template-rows: 900px;
  }
`;
export default function Sail() {
  return (
    <Container id='sail'>
      <Title data-scroll data-scroll-speed='-0.09'>
        Расспродажа
      </Title>
      <CardsContainer>
        {[...new Array(6)].map((_, i) => (
          <SailCards
            key={i}
            imgURL={sail[i].imgURL}
            title={sail[i].title}
            parag={sail[i].parag}
            price={sail[i].price}
            beforePrice={sail[i].beforePrice}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}
