// This is the style component for Login/Logout page:

import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 550px;
  height: 550px;
  border: 1px solid white;
  border-radius: 50%;
  padding: 30px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .mealImg {
    width: 200px;
  }

  h1 {
    color: white;
  }

  form {
    width: 250px;
    height: 250px;
    margin: 0 auto;

    button {
      width: 250px;
    }
  }
`;
