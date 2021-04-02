import styled, { css } from "styled-components";

const Button = styled.button`
${(props) => props.color && css`
background: ${props.color};
width: ${props.width}px;
:hover{
    border: 1px solid ${props.color};
    background: white;
    color: ${props.color};
    transition: 450ms background ease;
}
`}
outline:none;
border:none;
color:white;
padding:7px;
`

export default Button;