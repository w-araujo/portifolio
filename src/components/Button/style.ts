import styled from 'styled-components'

export const Container = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
border: 0;
background: #ff0f7b;
height: 56px;
width: 200px;
padding: 0 16px;
border-radius: 50px;
color: white;
font-weight: bold;
margin-top: 70px;
font-size: 18px;
cursor: pointer;
&:hover{
    opacity: 0.9;
}
`

export const Circle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 35px;
height: 35px;
border-radius: 50%;
background: white;
`