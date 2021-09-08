import React from 'react';
import Link from 'next/link';

import { BannerDiv, CartoonDiv, TitleDiv } from './styles';

const index = () => {
  return (
    <BannerDiv>
      <TitleDiv>
        <h1>
          Inicia tu <br />
          <span>Practical Learning</span>
        </h1>
        <p>
          Una maravillosa plataforma en dónde podrás cursar los programas
          que más te interesen y aprender hasta convertirte en un
          profesional en la materia. Con Practical Learning aprenderás
          instruyendote de videos, juegos, quizes, ¡entre muchas más
          herramientas fantásticas!
        </p>
        <Link href="/signup">
          <button>¡Quiero unirme!</button>
        </Link>
      </TitleDiv>
      <CartoonDiv>
        <img
          src="/static/landing/main-cartoon.webp"
          alt="course cartoon"
        />
      </CartoonDiv>
    </BannerDiv>
  );
};

export default index;
