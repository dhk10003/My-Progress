//  To use global styles, we need to import createGlobalStyle from styled-components

import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
// this will be applied to the whole page:
    body{
        margin: 0;
        padding: 0;
        background: lightgray;
        font-family: 'Roboto', sans-serif;
    }

    // this will be applied to the div with class App
    .App{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export default GlobalStyle;