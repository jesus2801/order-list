import { NotificationsNoneRounded } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import React from 'react';

import Points from '@atoms/points';

import { BellDiv, TopButtonsDiv } from './styles';

const index = () => {
  return (
    <TopButtonsDiv>
      <BellDiv>
        <IconButton>
          <NotificationsNoneRounded />
        </IconButton>
      </BellDiv>
      <Points />
    </TopButtonsDiv>
  );
};

export default index;
