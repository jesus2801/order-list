import React from 'react';
import Svg from '@atoms/svg';

import { MainDiv, Cartoon } from './styles';

const index = () => {
  return (
    <MainDiv>
      <Svg path="/static/auth/login" Styles={Cartoon} />
    </MainDiv>
  );
};

export default index;
