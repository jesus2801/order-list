import styled from '@emotion/styled';

export const BannerDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 20px;

  background-image: url('/static/landing/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom-right-radius: 35%;

  display: grid;
  grid-template-columns: 45% calc(50% - 30px);
  gap: 30px;
`;

export const CartoonDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  padding-bottom: 10%;

  img {
    width: 500px;
  }
`;

export const TitleDiv = styled.div`
  box-sizing: border-box;
  padding-left: 30px;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: var(--black);
    font-size: 48px;

    line-height: 110%;

    span {
      color: var(--red);
      font-size: 57px;
    }
  }

  p {
    color: var(--black);
    font-size: 16px;
  }

  button {
    color: #ffffff;
    background-color: var(--red);
    padding: 9px 22px;
    border-radius: 100px;
    outline: none;
    border: none;
    font-size: 16px;

    cursor: pointer;
    transition: background-color 400ms ease;

    &:hover {
      background-color: var(--red-dark);
    }
  }
`;
