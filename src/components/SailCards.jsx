import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 355px;
  height: 570px;
  padding: 10px;

  border: 2px solid ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 2000px) {
    width: 600px;
    height: 900px;
  }
  @media screen and (max-width: 380px) {
    width: 310px;
    height: 550px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;

  display: flex;
  justify-content: center;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
`;
const TextContainer = styled.div`
  padding: 10px;

  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.theme.text};
  font-weight: 400;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: ${(props) => props.theme.fontxl};

    @media screen and (min-width: 2000px) {
      font-size: ${(props) => props.theme.fontxxl};
    }
  }
  .descr {
    @media screen and (min-width: 2000px) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;
const PriceContainer = styled.p`
  position: relative;
  text-align: end;
  top: -10%;

  font-weight: 600;
  color: #ce0c0c;
  font-size: ${(props) => props.theme.fontxl};

  @media screen and (min-width: 2000px) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  span {
    position: absolute;
    font-weight: 400;
    right: -10px;
    bottom: -60%;

    color: ${(props) => props.theme.text};
    font-size: 0.65em;
  }
`;
export default function SailCards({ imgURL, title, parag, price, beforePrice }) {
  return (
    <Container>
      <ImageContainer>
        <img src={imgURL} alt='Товар' />
      </ImageContainer>
      <TextContainer>
        <h2>{title}</h2>
        <p className='descr'>{parag}</p>
        <PriceContainer>
          {price}
          <span>
            <strike>{beforePrice}</strike>
          </span>
        </PriceContainer>
      </TextContainer>
    </Container>
  );
}
