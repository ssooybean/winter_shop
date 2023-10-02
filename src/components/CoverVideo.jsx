import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const DarkBlur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;
const Text = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  text-align: center;

  h1 {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.7)`};
    font-family: 'Croisant One', sans-serif;
    font-size: ${(props) => props.theme.fontxxxl};

    letter-spacing: 0.4rem;

    @media screen and (min-width: 2000px) {
      font-size: ${(props) => props.theme.fontBig};
    }
    @media screen and (max-width: 500px) {
      font-size: ${(props) => props.theme.fontxxl};
    }
  }
`;

const dots = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const container = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 6,
      staggerChildren: 0.3,
      ease: 'easeOut',
      duration: 7,
    },
  },
};

export default function CoverVideo() {
  return (
    <Container>
      <DarkBlur />
      <Text>
        <motion.h1 variants={container} initial='hidden' animate='show'>
          Winter is coming
          <motion.span variants={dots} data-scroll data-scroll-delay='0.13' data-scroll-speed='8'>
            .
          </motion.span>
          <motion.span variants={dots} data-scroll data-scroll-delay='0.09' data-scroll-speed='8'>
            .
          </motion.span>
          <motion.span variants={dots} data-scroll data-scroll-delay='0.06' data-scroll-speed='8'>
            .
          </motion.span>
        </motion.h1>
      </Text>
      <video src='./video/snow2.mp4' type='video/mp4' autoPlay muted loop />
    </Container>
  );
}
