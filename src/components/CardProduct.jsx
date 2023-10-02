import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 40vw;
  height: 50vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  p {
    width: 90%;

    color: ${(props) => props.theme.body};
    font-size: ${(props) => props.theme.fontlg};
    font-family: 'Montserrat';

    text-align: center;

    @media screen and (min-width: 2000px) {
      font-size: ${(props) => props.theme.fontxl};
    }
    @media screen and (max-width: 500px) {
      font-size: ${(props) => props.theme.fontmd};
      width: 80%;
    }
    @media screen and (max-width: 380px) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media screen and (min-width: 2000px) {
    width: 60vw;
    height: 60vh;
  }
  @media screen and (max-width: 1100px) {
    width: 80vw;
    height: 70vh;
  }
  @media screen and (max-width: 500px) {
    width: 130vw;
  }
  @media screen and (min-width: 500px) and (max-width: 720px) {
    width: 100vw;
    height: 70vh;
  }
  @media screen and (max-width: 380px) {
    height: 70vh;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 85%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;
export default function CardProduct({ img, p }) {
  return (
    <Container>
      <ImageContainer>
        <img src={img} alt='Специальное предложение' />
      </ImageContainer>
      <p>{p}</p>
    </Container>
  );
}
