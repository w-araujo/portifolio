import styled from "styled-components";
import NotFound from "../../assets/404.png";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  background-image: url(${NotFound});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
