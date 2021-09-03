import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
//normalize styles
import 'normalize.css';

import { mainTheme } from '@styles/materialUI';
//global styles
import '@styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
