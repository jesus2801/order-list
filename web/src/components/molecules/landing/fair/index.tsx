import React from 'react';
import { Button } from '@material-ui/core';

import { FairCard } from './styles';

const index = () => {
  return (
    <FairCard>
      <h2>
        ¡Ya llegó la feria de <br /> programación!
      </h2>
      <img
        src="/static/landing/programming.png"
        alt="programming image"
      />
      <p>
        Como parte de nuestro lanzamiento hemos puesto a tu disposición
        diferentes cursos relacionados con este increible mundo
        tecnológico el cuál es el futuro de la socidad. ¿Qué esperas para
        programar el futuro de la sociedad?
      </p>
      <Button variant="contained" color="primary" fullWidth={true}>
        ¡Lo quiero!
      </Button>
    </FairCard>
  );
};

export default index;
