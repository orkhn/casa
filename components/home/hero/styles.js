import styled from "styled-components";
import { motion } from "framer-motion";

export const Hero = styled.section`
  width: 144rem;
  height: 80vh;
  margin: 2rem auto;
  position: relative;
  display: flex;
`;

export const Heading = styled.div`
  width: 100%;

  & video {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(70%);
  }
`;

export const Title = styled(motion.div)`
  text-align: center;
  width: 100%;
  height: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 10rem;
    font-weight: 800;
    letter-spacing: -0.4rem;
    text-transform: uppercase;
    font-style: normal;
    color: var(--color-white);
    margin-bottom: 2rem;
  }
  a {
    font-size: 2.6rem;
    color: var(--color-white);
  }
`;

export const ArrowIcon = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="20" x2="20" y2="20" stroke="white" />
      <line
        x1="1.29852"
        y1="19.2873"
        x2="19.5859"
        y2="1.28732"
        stroke="white"
      />
      <path d="M1 1H21" stroke="white" />
    </svg>
  );
};

export const Sliders = styled.div`
  min-width: 15rem;
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  color: var(--color-white);
`;

export const SlidersBtns = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-size: 5rem;
`;
