// This is the style component for the home page

import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100%;
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    height: 100%;

    .recipe-card {
        h3 {
            text-align: center;
            margin: auto;
        }
        img {
            width: 200px;
            height: 220px;
            padding: 5px;
            margin: auto;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
        width: 300px;
        height: 400px;
        border: 1px solid black;
        border-radius: 10px;
        background-color: #E1F0DD;
        margin: 10px;
        padding: 10px;
    }

    a {
        margin: auto;
        
        button {
        padding: 5px;
        width: 100px;
        background-color: #00ACB5;
        color: black;
        border-radius: 5px;
        cursor: pointer;
    }
    }
`