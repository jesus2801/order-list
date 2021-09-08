import React from 'react';
import { FairCard } from './styles';

const index = () => {
  return (
    <FairCard>
      <h2>¡Ya llegó la feria de <br /> programación!</h2>
      <img
        src="/static/landing/programming.png"
        alt="programming image"
      />
    </FairCard>
  );
};

export default index;
