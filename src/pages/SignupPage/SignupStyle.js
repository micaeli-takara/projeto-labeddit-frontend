import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

export const TitleSignup = styled.h1`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 33px;
  font-weight: 700;
  line-height: 43px;
  color: #373737;
  overflow: hidden;
`;

export const TypeWriterAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 180px;
  }
`;

export const BlinkAnimation = keyframes`
  from {
    border-color: black;
  }
  to {
    border-color: transparent;
  }
`;

export const Heading = styled.h1`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 33px;
  font-weight: 700;
  overflow: hidden;
  animation: ${TypeWriterAnimation} 2s steps(8) infinite alternate,
    ${BlinkAnimation} 800ms steps(8) infinite normal;
  border-right: 5px solid black;
`;

export const Form = styled.form`
  margin-top: 6rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  .input {
    border-radius: 4px;
    border: #d5d8de solid 1px;
    height: 4rem;
    width: 100%;
    padding: 1rem;
  }

  .input-container label {
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    font-size: 15px;
    position: relative;
    bottom: 2.7rem;
    right: -1rem;
    transition: top 0.2s, font-size 0.2s;
    pointer-events: none;
  }

  .input-container label.active {
    bottom: 3.8rem;
    font-size: 12px;
  }
`;

export const ContainerAutorization = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: justify;
  color: #000;

  span {
    color: #4088cb;
  }

  .ContainerCheckbox {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const ButtonCreateCount = styled.button`
  color: white;
  border: none;
  background: rgb(255, 100, 137);
  background: linear-gradient(
    90deg,
    rgba(255, 100, 137, 0.896796218487395) 0%,
    rgba(254, 114, 79, 0.8435749299719888) 50%,
    rgba(249, 178, 78, 0.8827906162464986) 100%
  );
  height: 48px;
  border-radius: 27px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;
`;
