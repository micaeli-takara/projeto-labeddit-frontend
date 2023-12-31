import styled from "styled-components";

export const FullScreenWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.8);
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 2rem;
  background-color: #f5f5f5; 
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  p {
    margin-top: auto;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 21rem;
  margin: 0 2rem 0 2rem;

  input {
    border-radius: 4px;
    border: #d5d8de solid 1px;
    height: 4rem;
    width: 100%;
    padding: 1rem;
    font-family: "Noto Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
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
    bottom: 3.7rem;
    font-size: 12px;
  }

  .input-container-password{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    .input-container{
      width: 80vw;
    }
  }
`;

export const ButtonsContainer = styled.div`
 display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding-top: 2rem;

  button {
    height: 48px;
    border-radius: 27px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }

  .button-continue {
    background: rgb(255, 100, 137);
    background: linear-gradient(
      90deg,
      rgba(255, 100, 137, 0.896796218487395) 0%,
      rgba(254, 114, 79, 0.8435749299719888) 50%,
      rgba(249, 178, 78, 0.8827906162464986) 100%
    );
    color: white;
    border: none;
    &:hover {
      background: #ff5072;
    }
  }

  .button-create {
    background: white;
    color: #fe7e02;
    border: #fe7e02 solid 1px;
  }
`;

export const ColoredLine = styled.hr`
  background: rgb(255, 100, 137);
  background: linear-gradient(
    90deg,
    rgba(255, 100, 137, 0.896796218487395) 0%,
    rgba(254, 114, 79, 0.8435749299719888) 50%,
    rgba(249, 178, 78, 0.8827906162464986) 100%
  );
  height: 1px;
  border: none;
`;