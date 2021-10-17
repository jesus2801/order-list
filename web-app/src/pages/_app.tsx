import { ThemeProvider } from '@material-ui/core';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import client from 'config/apollo.client';
import store from 'context/store';

//normalize styles
import 'normalize.css';

import { mainTheme } from '@styles/materialUI';
//global styles
import '@styles/global.scss';

function OrdersApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default OrdersApp;
