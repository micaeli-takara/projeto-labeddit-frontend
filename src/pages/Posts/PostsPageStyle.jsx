import styled from "styled-components";

export const ContainerPostPage = styled.form`
  margin: 2.13rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ContainerPost = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  .inputForm {
    background-color: #ededed;
    border: none;
    height: 131px;
    border-radius: 12px;
    background: #ededed;
  }

  textarea {
    border: none;
    background-color: #ededed;
    padding: 1.5rem;
    border-radius: 12px;
    color: #6f6f6f;
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-weight: 400;
    width: 100%;
    height: 131px;
  }
`;

export const ButtonPost = styled.button`
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
  border-radius: 12px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
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
  margin: 1rem 0;
`;
