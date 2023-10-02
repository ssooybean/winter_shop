import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

const Container = styled.section`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.text};

  border: 4px solid ${(props) => props.theme.text};

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Contact = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  background-color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  div {
    border: 2px solid ${(props) => props.theme.text};

    width: 30vw;
    height: 30vw;

    padding: 4rem;

    @media screen and (max-width: 1500px) {
      width: 80%;
      height: 60vh;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    @media screen and (max-width: 1500px) {
      width: 80%;
      height: 60vh;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    @media screen and (max-width: 920px) {
      width: 80%;
      height: 80vw;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    @media screen and (max-width: 500px) {
      width: 80vw;
      height: 80vw;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  p {
    span {
      position: relative;
      bottom: 0;
      left: 0;

      font-size: ${(props) => props.theme.fontlg};
      font-weight: 300;
      line-height: 2rem;
      @media screen and (min-width: 2000px) {
        font-size: ${(props) => props.theme.fontxl};
        line-height: 3rem;
      }
      @media screen and (max-width: 500px) {
        font-size: ${(props) => props.theme.fontmd};
        line-height: 1.5rem;
      }
      @media screen and (max-width: 380px), (max-height: 900px) {
        font-size: ${(props) => props.theme.fontsm};
        line-height: 1.2rem;
      }
    }
    .adress,
    .email {
      font-size: ${(props) => props.theme.fontxl};
      line-height: 1rem;
      &::after {
        content: '';
        display: block;
        width: 80%;
        height: 2px;

        margin-top: 5px;

        background-color: ${(props) => props.theme.text};
        @media screen and (min-width: 2000px) {
          height: 3px;
        }
      }
      @media screen and (min-width: 2000px) {
        font-size: ${(props) => props.theme.fontxxl};
      }
      @media screen and (max-width: 720px) {
        font-size: ${(props) => props.theme.fontlg};
      }
    }
  }
`;
const FormContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const ContactHeader = styled.h3`
  position: absolute;
  top: 6.3rem;

  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'CroissantOne', sans-serif;
  background-color: ${(props) => props.theme.body};

  color: ${(props) => props.theme.text};

  @media screen and (min-width: 2000px) {
    font-size: ${(props) => props.theme.fontxxxl};
    top: 9rem;
  }
  @media screen and (max-width: 1100px) {
    top: 5rem;
  }
  @media screen and (min-width: 500px) and (max-width: 720px) {
    font-size: ${(props) => props.theme.fontxl};
    top: 5rem;
  }
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxl};

    top: -2rem;
  }
  @media screen and (max-width: 380px) {
    font-size: ${(props) => props.theme.fontlg};

    top: -3.5rem;
  }
  @media screen and (max-height: 450px) {
    display: none;
  }
`;
const FormHeader = styled.h3`
  position: absolute;
  top: 6.3rem;

  z-index: 10;

  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'CroissantOne', sans-serif;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  @media screen and (min-width: 2000px) {
    font-size: ${(props) => props.theme.fontxxxl};
    top: 9rem;
  }
  @media screen and (max-width: 1100px) {
    top: 5rem;
  }
  @media screen and (min-width: 500px) and (max-width: 728px) {
    font-size: ${(props) => props.theme.fontxl};
    top: 5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontxl};

    top: 2.9rem;
  }

  @media screen and (max-width: 380px) {
    font-size: ${(props) => props.theme.fontlg};

    top: 0.5rem;
  }
  @media screen and (max-height: 450px) {
    display: none;
  }
`;
const Auther = styled.span`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);

  mix-blend-mode: difference;
  color: white;

  font-family: 'Montserrat', sans-serif;
  font-size: ${(props) => props.theme.fontlg};

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media screen and (max-width: 380px) {
    background-color: ${(props) => props.theme.text};
    mix-blend-mode: normal;
  }
`;
export default function Contacts() {
  return (
    <Container id='contacts'>
      <Contact>
        <ContactHeader data-scroll data-scroll-speed='-0.09'>
          Контакты
        </ContactHeader>
        <div>
          <p>
            <span className='adress'>Адреса:</span>
            <br />
            <span>Манежная пл., 1с2, Москва, 125009</span>
            <br />
            <span>Ленинградское ш., 18с2, Москва, 125009</span>
            <br />
            <span>ул. Покрышкина, 4, Москва, 119602</span>
          </p>
          <br />
          <br />
          <p>
            <span className='email'>Почта:</span>
            <br />
            <span>skipro@gmail.com</span>
            <br />
            <span>prikolnaprikole@gmail.com</span>
          </p>
        </div>
      </Contact>
      <FormContainer>
        <FormHeader data-scroll data-scroll-speed='-0.09'>
          Подписка
        </FormHeader>
        <Form />
      </FormContainer>
      <Auther> ©ssoybean</Auther>
    </Container>
  );
}
