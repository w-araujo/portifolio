import styled from "styled-components";

export const Background = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
export const Tittle = styled.p`
background: linear-gradient(to right, #fff, #ff0f7b);
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