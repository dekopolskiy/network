import styled, { css } from "styled-components";

const Button = styled.button`
${(props) => props.color && css`
background: ${props.color};
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
width:25%;
padding:5px;
`

export default Button;