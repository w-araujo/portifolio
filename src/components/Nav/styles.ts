import styled from "styled-components";

export const Container = styled.div`
  background-color: #20232a;
  width: 100vw;
  height: 11vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 84.23px;
`;

export const Title = styled.h2`
  position: relative;
  background: linear-gradient(to right, #1fddda, #a883f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  right: 30px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Center = styled.div`
  width: 300px;
`;

export const NavList = styled.ul`
  height: 85px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    height: 40px;
  }
`;

export const NavItem = styled.li`
  position: relative;
  font-size: 21px;
  font-weight: bold;

  &:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2.2px;
    background: linear-gradient(to right, #1fddda, #a883f3);
  }

  @media (max-width: 800px) {
    font-size: 17px;
  }
`;

export const RightSide = styled.div`
  width: 200px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    margin-top: 10px;
    height: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
    justify-content: end;
  }
`;

export const IconLink = styled.a`
  margin-left: 15px;
  font-size: 30px;

  @media (max-width: 800px) {
    font-size: 25px;
  }
`;
