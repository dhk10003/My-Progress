import styled from 'styled-components';
import {lightTheme, darkTheme} from '../theme.js'

const P = styled.p`
    background: ${(props)=> (props.darkMode? darkTheme.bg : lightTheme.bg)};
    color: ${(props)=> (props.darkMode? darkTheme.text : lightTheme.text)};
    font-size:${(props)=>(props.darkMode? "50px" : "10px" )};
    font-family:courier;
    width:200px;
    // height:100px;
` 

export default P;