import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  position: absolute;
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */

  touch-action: none;
  overflow: hidden;

  min-width: 100vw;
  min-height: 100vh;
  z-index: 15;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  svg {
    position: absolute;
    width: 10vw;
    height: auto;
    overflow: visible;
    fill: ${(props) => props.theme.body};

    @media screen and (max-width: 500px) {
      width: 13vh;
    }
  }
  h3 {
    color: ${(props) => props.theme.body};
    font-size: ${(props) => props.theme.fontxxl};
    letter-spacing: 0.4rem;
  }
`;

export default function Loader() {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.svg
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 180, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 3 }}
        x='0px'
        y='0px'
        viewBox='0 0 492 492'
      >
        <g>
          <g>
            <path
              d='M461,124l-22-13l-60,32v-43l-16-9l-15,9v67l-41,21v-46l-41,23v-43l62-31V70l-22-12l-40,21V14L246,0
l-20,14v65l-35-21l-17,11v23l52,30v43l-41-22v45l-38-22l1-63l-20-12l-15,12v41l-58-32l-24,11v26l57,31l-37,21v23l21,10l53-31
l37,21l-37,23l38,22h1l-37,22l-54-32l-22,12v24l38,18l-58,33v26l25,10l57-32v41l14,11l17-12v-62l41-21v45l41-25v43l-52,30v23
l17,11l35-21v65l20,14l20-14v-65l35,21l17-9v-25l-52-30v-43l41,23v-42l41,22v62l16,11l15-11v-41l56,31l26-11v-25l-54-33l34-19v-22
l-19-12l-55,30l-39-20l38-22l-36-23l37-24l55,32l19-10v-23l-36-20l56-32V124z M266,277h-36l-19-30l18-32h36l17,32L266,277z'
            />
          </g>
        </g>
      </motion.svg>
      <motion.h3
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 150, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        Ski Pro
      </motion.h3>
    </Container>
  );
}
