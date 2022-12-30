import styled from "styled-components";
import img from '../../assets/bg.png';

export const Background = styled.div`
h1 {
    font-size: 50px;
}

a {
    color: white;
}
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
background-image: url(${img});
background-size: cover;
@media only screen and (max-width: 710px) {
    padding: 50px;
    justify-content: center;
    align-items: flex-start;
    h1 {
        font-size: 37px;
    }
    img {
      display: none;
    }
  }
`;

export const LeftSide = styled.div`
@media only screen and (max-width: 710px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`

export const RigthSide = styled.div`
p {
  font-size: 14px;
}
text-align: center;

@media only screen and (max-width: 710px) {
position: absolute;
bottom: 5px;
text-align: center;
width: 100%;
}
`

export const Tittle = styled.p`
color: #ff0f7b;
font-weight: bold;
font-size: 40px;
margin-top: 20px;
margin-bottom: 50px;
@media only screen and (max-width: 710px) {
    font-size: 40px
  }
`;

export const SocialMedia = styled.div`

`