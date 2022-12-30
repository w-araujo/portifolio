import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';
import { FaArrowDown } from 'react-icons/fa'

interface EndPageLinkProps {
    name: string;
    link: string;
}

const EndPageLink: React.FC<EndPageLinkProps> = ({ name, link }) => {
    return (
        <Container>
            <Link 
            to={link}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#ff0f7b',
                }}
                >
                <h2 style={{marginBottom: 10}}>{name}</h2>
                <FaArrowDown fontSize={20}/>
            </Link>
        </Container>
    )
}

export default EndPageLink;