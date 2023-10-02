import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled(motion.nav)`
  position: absolute;
  z-index: 10;
  top: ${(props) => (props.$ismenuopen ? '0' : `-${props.theme.navHeight}`)};

  width: 100%;
  height: ${(props) => props.theme.navHeight};

  font-family: 'Croisant One', sans-serif;
  color: ${(props) => props.theme.body};

  transition: all 0.5s ease;
  /* @media screen and (min-width: 2000px) {
    height: ${(props) => props.theme.navHeightMobile};
    top: ${(props) => (props.$ismenuopen ? '0' : `-${props.theme.navHeightMobile}`)};
  } */
  @media screen and (max-width: 500px), (min-width: 2000px) {
    height: ${(props) => props.theme.navHeightMobile};
    top: ${(props) => (props.$ismenuopen ? '0' : `-${props.theme.navHeightMobile}`)};
  }
`;

const HomeBtn = styled.li`
  position: absolute;
  top: 100%;
  bottom: 50%;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  width: 15rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};

  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontmd};
  text-transform: uppercase;
  font-weight: 600;

  cursor: pointer;

  @media screen and (min-width: 2000px) {
    width: 25rem;
    height: 5rem;

    font-size: ${(props) => props.theme.fontxl};
  }
  @media screen and (max-width: 380px) {
    width: 13rem;
  }
`;

const List = styled(motion.ul)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props) => props.theme.text};

  width: 100%;
  height: 100%;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
  }
`;

const Item = styled(motion.li)`
  font-size: ${(props) => props.theme.fontmd};

  @media screen and (min-width: 2000px) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

export default function Navigate({ scroll }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <Container
      $ismenuopen={isMenuOpen}
      initial={{
        y: '-100%',
      }}
      animate={{
        y: '0',
      }}
      transition={{
        duration: 5,
        delay: 0,
      }}
    >
      <List>
        <HomeBtn
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}
        >
          Главная
        </HomeBtn>
        <Item
          whileHover={{
            scale: 1.2,
            y: -5,
            transition: { duration: 0.6 },
          }}
          whileTap={{ scale: 0.8, y: 2 }}
        >
          <a href='#fixed-target'>О нас</a>
        </Item>
        <Item
          whileHover={{
            scale: 1.2,
            y: -5,
            transition: { duration: 0.6 },
          }}
          whileTap={{ scale: 0.8, y: 2 }}
        >
          <a href='#special'>Специальные предложения</a>
        </Item>
        <Item
          whileHover={{
            scale: 1.2,
            y: -5,
            transition: { duration: 0.6 },
          }}
          whileTap={{ scale: 0.8, y: 2 }}
        >
          <a href='#sail'>Распродажа</a>
        </Item>
        <Item
          whileHover={{
            scale: 1.2,
            y: -5,
            transition: { duration: 0.6 },
          }}
          whileTap={{ scale: 0.8, y: 2 }}
        >
          <a href='#contacts'>Контакты</a>
        </Item>
      </List>
    </Container>
  );
}
