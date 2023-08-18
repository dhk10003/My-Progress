// This is the style for the navbar component

import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #E1F0DD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
        a {
            text-decoration: none;
            color: #02475E;
            &:hover {
                color: #00ACB5;}
        
        }
    `

export const NavLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    margin-right: 1rem;
    `