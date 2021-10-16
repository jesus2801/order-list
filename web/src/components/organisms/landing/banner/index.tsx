import React from 'react';
import Link from 'next/link';

import { BannerDiv, CartoonDiv, TitleDiv } from './styles';

const index = () => {
  return (
    <BannerDiv>
      <TitleDiv>
        <h1>
          Start your <br />
          <span>Order list</span>
        </h1>
        <p>
          Today we all need a list of orders for our business, we present
          this simple and minimalist application to manage your orders
          online and in real time! What are you waiting for? Start this
          fantastic experience in managing your daily orders!
        </p>
        <Link href="/signup">
          <button>I want to join!</button>
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
