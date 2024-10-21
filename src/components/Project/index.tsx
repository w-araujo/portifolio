import React from "react";
import {
  ContainerWrap,
  Container,
  BlueSquare,
  ProjectTitle,
  ProjectDescription,
} from "./style";

interface ProjectProps {
  name: string;
  description: string;
  img: string;
  html_url: string;
}

const Project: React.FC<ProjectProps> = ({
  html_url,
  name,
  description,
  img,
}) => {
  return (
    <ContainerWrap>
      <a href={html_url} target="blank" style={{ textDecoration: "none" }}>
        <Container>
          <BlueSquare />
          <img
            src={img}
            width="200px"
            height="200px"
            style={{ borderTopRightRadius: "60px" }}
            alt="Imagem do projeto"
          />
          <ProjectTitle>{name}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </Container>
      </a>
    </ContainerWrap>
  );
};

export { Project };
