import styled from "styled-components"

const Button=styled.button`
color: ${(props)=>props.color};
background-color: ${(props)=>{
    return props.bg
}};
border: ${(props)=>props.border};
margin-right: 70px;
padding: ${(props)=>props.padding};
`

export {Button}