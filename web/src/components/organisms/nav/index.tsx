import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { NavDiv } from './styles';

const index = () => {
  //state for the actual URL
  const [actualUrl, setActualUrl] = useState('');

  //update the actual URL when the component rendered
  useEffect(() => {
    setActualUrl(window.location.pathname);
  }, []);

  console.log(actualUrl);

  return (
    <NavDiv>
      <Link href="/">
        <p className={actualUrl === '/' ? 'selected' : ''}>Inicio</p>
      </Link>
      <Link href="/login">
        <p className={actualUrl === '/login/' ? 'selected' : ''}>
          Iniciar sesión
        </p>
      </Link>
      <Link href="/signup">
        <p className={actualUrl === '/signup/' ? 'selected' : ''}>
          Registrate
        </p>
      </Link>
      <Link href="/contact">
        <p className={actualUrl === '/contact/' ? 'selected' : ''}>
          Cursos
        </p>
      </Link>
    </NavDiv>
  );
};

export default index;
