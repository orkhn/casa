import styled from "styled-components";

export const Subscribe = styled.form`
  position: relative;
  margin: 10rem auto 5rem auto;
  background: #392a34;
  width: 75rem;
  height: 28rem;
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const ImageSection = styled.div`
  width: 45%;
  height: 100%;
`;

export const Avocado = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

export const Ribbon1 = styled.div`
  position: absolute;
  top: -2.2rem;
  right: -2.5rem;
`;

export const Sushi = styled.div`
  position: absolute;
  left: 0rem;
  top: -2.1rem;
`;

export const FormSection = styled.div`
  width: 55%;
`;

export const Title = styled.h3`
  font-size: 1.92rem;
  font-weight: normal;
  padding-bottom: 2rem;
  font-family: "Noto Serif JP", serif;

  .header {
    font-family: "Clicker Script", cursive;
    color: #ef7a1e;
    font-size: 6rem;
  }

  span {
    display: block;
    color: #fff;
    font-size: 3rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const InputField = styled.div`
  width: 50rem;
  position: relative;
`;

export const Input = styled.input`
  border: none;
  border-radius: 5rem;
  width: 38rem;
  outline: none;
  font-size: 1.6rem;
  height: 5rem;
  padding-left: 1.5rem;
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.3px;
  color: #fff;
  background-color: #ef7a1e;
  border: none;
  border-radius: 5rem;
  outline: none;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 0.6rem 1rem;
  position: absolute;
  right: 3rem;
  top: 0.8rem;

  svg {
    width: 1rem;
  }
`;

// svg icons

export const RightArrow = () => {
  return (
    <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
        fill="white"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
