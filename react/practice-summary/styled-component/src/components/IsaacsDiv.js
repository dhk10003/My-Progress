import React, { useState } from 'react';
import styled from 'styled-components';
import {lightTheme, darkTheme} from '../theme.js'

const StyledDiv = styled.div`
    width:100px;
    height:${(props)=>(props.darkMode?'30px': '50px')};
    font-size: 18px;
    border: 1px solid orange;
    background-color: blue;
` 



export default StyledDiv;