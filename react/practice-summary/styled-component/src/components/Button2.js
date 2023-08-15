import styled from 'styled-components';

const Button2 = styled.button

`
background: ${(props)=> (props.danger ? "red" : "green" )};
    color: ${(props)=> (props.danger ? "white" : "black")};
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid black;

`

export default Button2;