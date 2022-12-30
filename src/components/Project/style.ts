import styled from 'styled-components'

export const ContainerWrap = styled.div`
padding: 25px;
`
export const Container = styled.div`
background: #ffffff;
position: relative;
width: 270px;
height: 350px;
padding: 20px;
border-radius: 10px 60px;
text-align: center;
color: #000;
margin-top: 30px;
margin-bottom: 50px;
&:hover{
    transition: 0.3s;
    transform: translateX(5px)
}
`
export const PinkSquare = styled.div`
background: transparent;
position: absolute;
border: 7px solid #ff0f7b;
width: 260px;
height: 252px;
margin-left: 14px;
top: 0;
margin-top: -25px;
`