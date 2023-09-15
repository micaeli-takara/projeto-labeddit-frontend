import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  height: 50px;
`;

export const Logo = styled.img`
  max-width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: auto;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  margin: 0 10px;
  padding: 5px 10px; 
  border-radius: 5px; 
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  font-family: Noto Sans;
font-size: 1.125rem;
font-style: normal;
font-weight: 600;
color: #4088CB;

  &:hover {
    background-color: #333;
    color: #fff; 
  }
`;

export const RightAlignedButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;
