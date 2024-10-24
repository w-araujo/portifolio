import styled from "styled-components";

export const Container = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #1fddda;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
