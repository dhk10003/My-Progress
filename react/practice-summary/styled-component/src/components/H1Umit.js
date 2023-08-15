import styled from 'styled-components';
import {lightTheme, darkTheme} from '../theme.js'

const H1Umit = styled.h1`

font-size: ${(props)=>(props.darkMode?'20px':"40px")};
background-color:${(props)=>(props.darkMode?darkTheme.bg:lightTheme.bg)};
color:${(props)=>(props.darkMode?darkTheme.text : lightTheme.text)};
border : ${(props)=>(props.darkMode?'2px solid black' : '2px solid red')};


&:hover{
    background-color:${(props)=>(props.darkMode?lightTheme.bg:darkTheme.bg)};
}


`
export default H1Umit