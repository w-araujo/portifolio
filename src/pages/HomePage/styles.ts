import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 75vh;

  @media (max-width: 1252px) {
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const LeftSide = styled.div`
  padding: 20px;
  text-align: center;
  h1 {
    font-size: 50px;
    margin-bottom: 40px;
  }
  h2 {
    font-size: 27px;
    strong {
      background: linear-gradient(to right, #1fddda, #a883f3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 1252px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 24px;
    }
  }

  @media (max-width: 800px) {
    margin-top: 30px;
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 25px;
    }
  }
`;

export const RightSide = styled.div`
  margin-top: 30px;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 1252px) {
    img {
      max-width: 400px;
    }
  }

  @media (max-width: 800px) {
    margin-top: 0;
    img {
      max-width: 300px;
    }
  }
`;

export const CarouselContainer = styled.div`
  border-top: 5px solid white;
  border-bottom: 5px solid white;
  display: flex;
  width: 35%;
  height: 13vh;
  margin: 20px auto, 0px, 0px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 800px) {
    width: 90%;
    height: 14vh;
  }
  bottom: -35px;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  animation: carouselAnim 20s infinite alternate linear;

  @media (max-width: 768px) {
    animation: carouselAnim 35s infinite alternate linear;
  }

  @keyframes carouselAnim {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(calc(-100% + (5 * 100px)));
    }
  }
`;

export const Entry = styled.div`
  margin-right: -70px;
  img {
    width: 250px;
  }
`;

export const Faders = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
`;

export const LeftFade = styled.div`
  background: linear-gradient(
    to right,
    rgb(20, 20, 20) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 7%;
  height: 100%;
  position: absolute;
  z-index: 200;
`;

export const RightFade = styled.div`
  background: linear-gradient(
    to left,
    rgb(20, 20, 20) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 7%;
  height: 100%;
  position: absolute;
  z-index: 200;
  right: 0;
`;

export const EntryFinal = styled.div`
  margin-left: 50px;
  img {
    width: 96px;
  }
`;
