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

  return (
    <NavDiv>
      <Link href="/">
        <p className={actualUrl === '/' ? 'selected' : ''}>Home</p>
      </Link>
      <Link href="/login">
        <p className={actualUrl === '/login/' ? 'selected' : ''}>Login</p>
      </Link>
      <Link href="/signup">
        <p className={actualUrl === '/signup/' ? 'selected' : ''}>
          Signup
        </p>
      </Link>

      <a href="https://www.google.com/" target="_blank">
        Contact
      </a>
    </NavDiv>
  );
};

export default index;
