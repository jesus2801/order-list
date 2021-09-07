import { ThemeProvider } from '@material-ui/core';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import client from 'config/apollo.client';

//normalize styles
import 'normalize.css';

import { mainTheme } from '@styles/materialUI';
//global styles
import '@styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
