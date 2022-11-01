import styled from "styled-components";
import { motion } from "framer-motion";

export const FounderMsgSection = styled.div`
  width: 144rem;
  height: 100vh;
  margin: 2rem auto 0 auto;
  display: flex;

  & > div {
    width: 50%;
    height: 50%;
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

export const ToStudents = styled.div``;
export const FoundersImg = styled.div``;
export const FoundersVision = styled.div``;
export const FoundersSign = styled.div``;
