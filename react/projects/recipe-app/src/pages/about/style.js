// This is the style component for About.js:

import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    img {
        width: 500px;
    }

    .myName {
        color: white;
        font-size: 1.5em;
    }

    .introduceContainer {
        padding: 30px;
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        gap: 30px;
        margin-bottom: 80px;

        .sendEmail {
            color: white;
            text-decoration: none;
        }
    }
`