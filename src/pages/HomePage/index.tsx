import React from 'react';
import { Link } from 'react-router-dom';

import { Background, LeftSide, RigthSide, Tittle, SocialMedia } from './styles';

import cellphoneImg from '../../assets/cellphone.png';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Button from '../../components/Button';

const HomePage: React.FC = () => {
    return (
        <Background>
            <LeftSide>
                <h1>Wesley Araujo</h1>
                <Tittle>Programador</Tittle>
                <SocialMedia>
                    <a href='https://www.linkedin.com/in/wesley-araujo-a99198201/'  style={{marginRight: 15}} target='blank'>

                        <BsLinkedin fontSize={50}/>
                   </a>
                   <a href='https://github.com/w-araujo' target='blank'>
                        <BsGithub fontSize={50}/>
                   </a>
                </SocialMedia>
                <Link to='/projects' style={{textDecoration: 'none'}}>
                <Button value="Ver Projetos"/>
                </Link>
            </LeftSide>
            <RigthSide>
               <img src={cellphoneImg} style={{marginBottom: 30}} width='300'  alt=''/> 
                <p>Site desenvolvido por Wesley Araujo</p>
                <p>© 2022 Todos direitos reservados</p>
            </RigthSide>
        </Background>
    )

}

export default HomePage;