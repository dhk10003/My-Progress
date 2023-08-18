// This is style component for Details page

import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
`


export const DetailsHeader = styled.div`
    display: flex;
    width: 80%;
    margin: 20px auto;
    justify-content: space-evenly;
    align-items: center;

    img {
        width: 250px;
    }
`
    
export const DetailsBody = styled.div`
    text-align: center;
    width: 90%;
    background-color: #E1F0DD;
    padding: 30px;
    margin: 20px auto 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
`