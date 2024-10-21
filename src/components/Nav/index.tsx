import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Container,
  LeftSide,
  Logo,
  Center,
  NavList,
  NavItem,
  RightSide,
  IconLink,
  Title,
} from "./styles";

const Nav: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Logo src={logo} alt="logo do site" />
        <Title>wesleyfa.dev</Title>
      </LeftSide>
      <Center>
        <NavList>
          <NavItem>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "gray",
              }}
            >
              About
            </Link>
          </NavItem>
        </NavList>
      </Center>
      <RightSide>
        <IconLink
          href="https://www.linkedin.com/in/wesley-araujo-a99198201/"
          target="blank"
        >
          <BsLinkedin color="#0077b7" />
        </IconLink>
        <IconLink href="https://github.com/w-araujo" target="blank">
          <BsGithub color="#ffffff" />
        </IconLink>
      </RightSide>
    </Container>
  );
};

export { Nav };
