import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContent = styled.div`
  width: 144rem;
  height: 100vh;
  margin: 2rem auto 0 auto;

  .content {
    width: 100%;
    height: 100%;
    display: flex;

    & > div {
      height: 100%;
      width: 50%;
    }
  }
`;
export const AboutTitle = styled(motion.h2)`
  display: block;
  font-size: 8rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;

export const GallerySection = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const InfoSection = styled(motion.div)`
  p {
    display: inline-block;
    margin-bottom: 2rem;
    width: 80%;
    text-align: justify;
  }
`;

export const GalleryContainer = styled.div`
  min-width: 50rem;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const SliderArea = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;
export const GalleryArea = styled(motion.div)`
  padding: 2rem;
  height: 60rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    background: url("/images/126147834_o.jpg");
    border-radius: 2rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  border-radius: 2rem;
  height: 5rem;
  width: 70%;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    border: none;
    border-radius: 2rem;
    background: none;
    color: white;
    width: 5rem;
    height: 100%;
    cursor: pointer;

    &:hover {
      background: #333;
    }
  }
`;
