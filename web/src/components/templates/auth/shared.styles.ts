import styled from '@emotion/styled';

//main div that contains the whole content
export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
`;

//image that accompanies the form
export const Cartoon = styled.object`
  width: 400px;
`;

//div of the login / signup form
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

//links to signup / login / forgot password
export const LinksDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
    color: var(--black);
    font-size: 13px;
    cursor: pointer;
    text-decoration: underline;
  }
`;

//Facebook / Google icon styles
export const ButtonIcon = styled.img`
  width: 22px;
`;
