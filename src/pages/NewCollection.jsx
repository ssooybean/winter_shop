import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CardProduct from '../components/CardProduct';
import special from '../store/special.json';

const Container = styled.section`
  min-width: 100vw;
  min-height: 100vh;

  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.text};
`;
const Text = styled.h1`
  position: relative;
  top: -20rem;
  left: 5%;
  z-index: 10;

  color: ${(props) => props.theme.body};
  font-family: 'Montserrat', sans-serif;
  font-size: ${(props) => props.theme.fontxxl};
  text-shadow: 3px 0px 10px ${(props) => props.theme.body};

  @media screen and (min-width: 2000px) {
    font-size: ${(props) => props.theme.fontxxxl};
    top: -30rem;
  }
  @media screen and (max-width: 1100px) {
    top: -15rem;
  }
  @media screen and (max-width: 728px) {
    font-size: ${(props) => props.theme.fontxl};
    top: -18rem;
  }
  @media screen and (max-width: 380px) {
    top: -14rem;
  }
  @media screen and (max-height: 450px) {
    top: -7rem;
  }
`;
const CollectionSection = styled.article`
  display: flex;
  align-items: center;
  gap: 10rem;

  position: absolute;
  left: 10px;
  padding: 0 3rem;

  margin-top: 40px;

  @media screen and (max-width: 500px) {
    gap: 0;
    padding: 0;
  }
`;
export default function NewCollection() {
  const cardsContainerRef = useRef(null);
  const races = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const racesOffsetWidth = races.current.offsetWidth;

    const amountToScroll = racesOffsetWidth - document.documentElement.clientWidth;

    const tween = gsap.fromTo(
      races.current,
      {
        translateX: 0,
      },
      {
        translateX: -amountToScroll,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 0',
          end: '+=' + amountToScroll + 'px',
          scrub: 1,
          pin: true,
        },
      },
    );
    return () => tween.kill();
  }, [races]);

  return (
    <Container ref={cardsContainerRef} id='special'>
      <Text data-scroll data-scroll-speed='0.1'>
        Специальные предложения
      </Text>

      <CollectionSection ref={races}>
        {[...new Array(6)].map((_, i) => (
          <CardProduct img={special[i].imgURL} p={special[i].parag} key={i} />
        ))}
      </CollectionSection>
    </Container>
  );
}
