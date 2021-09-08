import React from 'react';
import Link from 'next/link';

import { NavDiv } from './styles';

const index = () => {
  return (
    <NavDiv>
      <Link href="/">
        <p className="selected">Inicio</p>
      </Link>
      <Link href="/login">
        <p>Iniciar sesión</p>
      </Link>
      <Link href="/signup">
        <p>Registrate</p>
      </Link>
      <Link href="/">
        <p>Contact</p>
      </Link>
    </NavDiv>
  );
};

export default index;
