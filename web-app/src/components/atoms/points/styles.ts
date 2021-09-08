import styled from '@emotion/styled';

export const PointsDiv = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 10px 25px;
  border-radius: 100px;
  background-color: var(--white);
  transition: transform 300ms ease;

  -webkit-box-shadow: 2px 3px 8px 1px rgba(227, 227, 227, 1);
  -moz-box-shadow: 2px 3px 8px 1px rgba(227, 227, 227, 1);
  box-shadow: 2px 3px 8px 1px rgba(227, 227, 227, 1);

  img {
    width: 25px;
    margin-right: 10px;
  }

  p {
    margin: 0;
    color: var(--black);
    font-size: 15px;
  }

  &:hover {
    transform: translateX(-10px);
  }
`;
