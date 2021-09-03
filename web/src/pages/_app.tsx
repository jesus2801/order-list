import type { AppProps } from 'next/app';
//estilos de normalize
import 'normalize.css';
//estilos globales
import '@styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
