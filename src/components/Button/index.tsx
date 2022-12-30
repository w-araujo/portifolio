import React, { ButtonHTMLAttributes } from 'react';
import { Container, Circle } from './style';
import { FaArrowRight } from 'react-icons/fa'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({value}) => {
    return (
        <Container>
            {value}
            <Circle>
               <FaArrowRight color='black'/>
            </Circle>
        </Container>
    )
}

export default Button;