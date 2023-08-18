//  This is style component for header and form components

import styled from "styled-components";

export const HeaderContainer = styled.div`
    font-size: 1.5rem;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem auto;
    width: 80%;
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        input {
            width: 250px;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-right: 0.5rem;
        }
        button {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #E1F0DD;
            color: black;
            cursor: pointer;

            &:hover {
                background-color: #70c658ef;}
        }
        select {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-left: 0.5rem;
        }
    }
`