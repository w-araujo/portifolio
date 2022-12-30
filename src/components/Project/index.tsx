import React from 'react';
import { ContainerWrap, Container, PinkSquare } from './style';

interface ProjectProps {
    name: string;
    description: string;
    img: string;
    html_url: string;
}

const Project: React.FC<ProjectProps> = ({html_url, name, description, img}) => {
    return (
        <ContainerWrap>
            <a href={html_url} target='blank' style={{textDecoration: 'none'}}>
        <Container>
            <PinkSquare/>   
            <img src={img} width="200px" height="200px" style={{borderTopRightRadius: '60px'}} alt="Imagem do projeto" />
            <h1 style={{marginTop: 10, marginBottom: 15, fontSize: 22, wordBreak: 'break-word'}}>{name}</h1>
            <p style={{wordBreak: 'break-all', overflow: 'auto', height: 70}}>{description}</p>
        </Container>
        </a>
        </ContainerWrap>
    )
}

export default Project;