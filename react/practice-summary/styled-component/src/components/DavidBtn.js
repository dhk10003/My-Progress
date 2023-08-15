import styled from 'styled-components';

const DavidBtn = styled.button`
    background-color: ${props => props.clicked ? "darkgray" : "white"};
    color: ${props => props.clicked ? "white" : "black"};
    padding: ${props => props.clicked ? "10px 20px" : "5px 10px"};
    border: ${props => props.clicked ? "5px dashed red" : "1px solid black"};
    border-radius: ${props => props.clicked ? "10px" : "5px"};
`;

export default DavidBtn;