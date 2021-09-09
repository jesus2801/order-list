import styled from '@emotion/styled';

export const TopButtonsDiv = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BellDiv = styled.div`
  margin-right: 24px;
  border-radius: 100px;
  background-color: var(--white);

  -webkit-box-shadow: 2px 3px 8px 1px rgba(227, 227, 227, 1);
  -moz-box-shadow: 2px 3px 8px 1px rgba(227, 227, 227, 1);
  box-shadow: 2px 3px 8px 1px rgba(227, 227, 227, 1);
`;
