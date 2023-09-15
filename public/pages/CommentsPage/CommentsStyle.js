import styled from "styled-components";

export const ContainerCommentsPage = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerComment = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  textarea {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    width: 100%;
    height: 131px;

    &:focus {
      border-color: #ff6a8a;
      box-shadow: 0px 0px 5px rgba(255, 106, 138, 0.5);
    }
  }

  p {
    align-self: flex-end;
    font-size: 12px;
    font-family: "Noto Sans", sans-serif;
  }`

export const ButtonPost = styled.button`
  color: white;
  border: none;
  background: linear-gradient(
    90deg,
    rgba(255, 100, 137, 0.9) 0%,
    rgba(254, 114, 79, 0.84) 50%,
    rgba(249, 178, 78, 0.88) 100%
  );
  height: 48px;
  border-radius: 12px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 100, 137, 1) 0%,
      rgba(254, 114, 79, 0.95) 50%,
      rgba(249, 178, 78, 0.98) 100%
    );
  }`

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
`
