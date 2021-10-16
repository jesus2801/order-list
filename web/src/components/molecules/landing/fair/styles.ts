import styled from '@emotion/styled';

export const FairCard = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 520px;
  border-radius: 9px;

  background-color: var(--white);

  transform: translate(40px, calc(370px - 100vh));
  transition: transform 300ms ease;

  padding: 12px 14px 15px 20px;

  -webkit-box-shadow: 3px 5px 9px 1px rgba(222, 222, 222, 1);
  -moz-box-shadow: 3px 5px 9px 1px rgba(222, 222, 222, 1);
  box-shadow: 3px 5px 9px 1px rgba(222, 222, 222, 1);

  &:hover {
    transform: translate(60px, calc(370px - 100vh));
  }

  h2 {
    margin: 0;
    z-index: 2;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;

    font-size: 32px;
  }

  img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    border-radius: 9px 9px 0 0;
    z-index: -1;
  }

  p {
    margin-top: 215px;
    color: var(--black);
    font-size: 15px;
  }
`;
