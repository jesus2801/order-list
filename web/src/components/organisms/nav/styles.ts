import styled from '@emotion/styled';

export const NavDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;

  z-index: 2;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  p, a {
    color: #fff;
    margin: 0 30px 0 0;

    cursor: pointer;
    text-decoration: none;

    &.selected {
      border-bottom: 2px solid #fff;
      padding-bottom: 3px;
    }
  }
`;
