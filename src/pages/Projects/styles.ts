import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Tittle = styled.p`
  padding: 25px;
  background: linear-gradient(to right, #1fddda, #a883f3);
  font-size: 50px;
  font-weight: 900;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContainerProject = styled.div`
  max-width: 1050px;
  min-width: 200px;
  max-height: 460px;
  overflow: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
