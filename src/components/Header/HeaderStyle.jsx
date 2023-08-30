import styled from "styled-components";

export const ContainerHeader = styled.header`
  background: #ededed;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.3rem;

  img {
    position: relative;
    left: 1rem;
  }
`;

export const ButtonLogin = styled.button`
  border: none;
  color: #4088cb;
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;

  position: relative;
  left: 8rem;
`;

export const ContainerHeaderComments = styled.div`
  background: #ededed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;

  button {
    border: none;
    color: #4088cb;
    text-align: center;
    font-family: Noto Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }

  .ButtonBackPost {
    width: 20px;
  }
`;
