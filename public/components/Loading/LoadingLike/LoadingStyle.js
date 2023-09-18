import styled from "styled-components";

export const LoadingContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: rgb(255, 100, 137);
  background: linear-gradient(
    90deg,
    rgba(255, 100, 137, 0.896796218487395) 0%,
    rgba(254, 114, 79, 0.8435749299719888) 50%,
    rgba(249, 178, 78, 0.8827906162464986) 100%
  );
`;

export const LoadingRoleSection = styled.div`
  border: 4px solid rgba(249, 178, 78, 0.8827906162464986);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;