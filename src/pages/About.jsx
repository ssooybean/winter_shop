import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;
const Left = styled(motion.div)`
  width: 33%;
  height: auto;

  display: flex;
  justify-content: center;

  img {
    width: 65%;
    height: auto;

    @media screen and (min-width: 2000px) {
      width: 100%;
    }
    @media screen and (max-width: 1100px) {
      position: absolute;
      top: -10rem;
      left: -2rem;
      width: 100%;
    }
    @media screen and (min-width: 729px) and (max-width: 920px) {
      position: absolute;

      width: 120%;
    }
    @media screen and (max-width: 728px) {
      width: 90%;
      filter: grayscale(60%);
    }

    @media screen and (max-height: 450px) {
      display: none;
    }
  }
  @media screen and (max-width: 728px) {
    position: absolute;
    width: 100%;
    z-index: 2;
  }
`;
const Center = styled(motion.div)`
  width: 33%;
  height: auto;
  p {
    font-family: 'Montserrat', 'sans-serif';
    font-weight: 300;
    font-size: ${(props) => props.theme.fontlg};

    @media screen and (min-width: 2000px) {
      max-width: 90%;
      margin: 0 auto;

      text-align: center;
      font-size: ${(props) => props.theme.fontxl};
    }
    @media screen and (max-width: 1100px) {
      font-size: ${(props) => props.theme.fontmd};
    }
    @media screen and (max-width: 728px) {
      //fff
      font-size: ${(props) => props.theme.fontmd};
    }
    @media screen and (max-width: 380px) {
      font-size: ${(props) => props.theme.fontsm};
    }
    @media screen and (max-width: 375px) {
      font-size: ${(props) => props.theme.fontxs};
      line-height: 1.2rem;
    }
  }
  @media screen and (min-width: 728px) and (max-width: 920px) {
    p {
      position: absolute;
    }
    .first {
      top: 20%;
      left: 5%;
      max-width: 50%;
    }
    .second {
      bottom: 5%;
      right: 5%;
      max-width: 50%;
    }
  }
  @media screen and (max-width: 728px) {
    //ddd
    position: absolute;
    width: 84%;
    padding: 8px;
    z-index: 5;

    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
    border-radius: 4px;
    color: ${(props) => props.theme.body};
  }
  @media screen and (min-width: 500px) and (max-width: 728px) {
    width: 65%;
  }
  @media screen and (max-height: 450px) {
    width: 90%;
  }
`;
const Right = styled(motion.div)`
  width: 33%;
  height: auto;

  display: flex;
  justify-content: center;

  img {
    width: 70%;
    height: auto;

    @media screen and (min-width: 2000px) {
      width: 100%;
    }
    @media screen and (min-width: 920px) and (max-width: 1100px) {
      position: absolute;
      bottom: -10rem;
      right: -2rem;
      width: 100%;
    }
    @media screen and (min-width: 728px) and (max-width: 920px) {
      position: absolute;
      right: 1%;
      top: -21rem;
      width: 120%;
    }
  }
  @media screen and (max-width: 728px) {
    //ffff
    display: none;
  }
`;
const Header = styled(motion.h1)`
  position: absolute;
  top: 20%;

  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 900;
  color: ${(props) => props.theme.text};

  @media screen and (min-width: 2000px) {
    font-size: ${(props) => props.theme.fontBig};
  }
  @media screen and (min-width: 728px) and (max-width: 1100px) {
    top: 8%;
  }
  @media screen and (max-width: 728px) {
    //ffff
    font-size: ${(props) => props.theme.fontxxl};
    top: 10%;
  }
  @media screen and (max-width: 380px) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

export default function About() {
  return (
    <Container id='fixed-target'>
      <Header data-scroll data-scroll-speed='0.1'>
        О нас
      </Header>
      <Left data-scroll data-scroll-speed='-0.09'>
        <img src='./images/LeftAbout.jpg' alt='About' />
      </Left>
      <Center data-scroll data-scroll-sticky data-scroll-target='#fixed-target'>
        <p className='first'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero cumque quae facere
          sapiente culpa accusantium quibusdam voluptatem vero? Doloremque vero cumque reprehenderit
          autem earum enim cum sapiente dignissimos ex quas? Ea maxime laborum facere alias.
        </p>
        <br />
        <p className='second'>
          Optio, consectetur accusamus? Odit nihil omnis dolorem quibusdam tenetur autem earum
          doloremque dolore nisi unde, fugiat nam debitis culpa aperiam perferendis repellat quasi
          harum aliquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus qui
          doloremque facilis eaque, excepturi asperiores dolores animi explicabo commodi dolorum
          quaerat temporibus molestiae nemo, a iusto, odio libero deserunt quia.
        </p>
      </Center>
      <Right data-scroll data-scroll-speed='0.09' data-scroll-direction='vertical'>
        <img src='./images/RightAbout.jpg' alt='About' />
      </Right>
    </Container>
  );
}
