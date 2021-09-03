import styled from '@emotion/styled';

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
`;

export const Cartoon = styled.object`
  width: 300px;
`;

export const FormDiv = styled.div`
  h1 {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  .submit-button {
    margin-top: 15px;
  }

  width: 90%;
  max-width: 350px;
  padding: 20px 30px;
  border-radius: 6px;

  -webkit-box-shadow: 3px 6px 8px 1px rgba(209, 209, 209, 1);
  -moz-box-shadow: 3px 6px 8px 1px rgba(209, 209, 209, 1);
  box-shadow: 3px 6px 8px 1px rgba(209, 209, 209, 1);
`;
