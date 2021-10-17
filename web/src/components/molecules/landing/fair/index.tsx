import React from 'react';
import { Button } from '@material-ui/core';

import { FairCard } from './styles';

const index = () => {
  return (
    <FairCard>
      <h2>
        Get to know the code of <br /> this application!
      </h2>
      <img
        src="/static/landing/programming.png"
        alt="programming image"
      />
      <p>
        This application is a small demonstration of the technologies that
        I (Jesus Garcia) have learned throughout my studies, I invite you
        to know the code of this adventure in my Github!
      </p>
      <a href="https://github.com/jesus2801/order-list" target="_blank">
        <Button variant="contained" color="primary" fullWidth={true}>
          Yes, of course!
        </Button>
      </a>
    </FairCard>
  );
};

export default index;
