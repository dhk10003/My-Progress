import styled from 'styled-components';
import {lightTheme, darkTheme} from '../theme.js'

const Button = styled.button`
    background: ${(props)=> (props.darkMode? darkTheme.bg : lightTheme.bg)};
    color: ${(props)=> (props.darkMode? darkTheme.text : lightTheme.text)};
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid black;

    &:hover{
        background: ${(props)=> (props.darkMode? lightTheme.bg : darkTheme.bg)};
        color: ${(props)=> (props.darkMode? lightTheme.text : darkTheme.text)};
    }

    // media queries:
    // @media (max-width: 768px){
    //   background: blue;
    // }
  `

export default Button;
  // This is basically the equivalent of the following:
  // const Btn2 = (props)=>{
  //   return(
  //     <button 
  //     style={{
  //       background: props.primary? "darkred" : "green",
  //       color: "white",
  //       padding: "10px 20px",
  //       borderRadius: "5px",
  //       border: "2px solid black"
  //     }}>Click Me three!</button>
  //   )
  // }