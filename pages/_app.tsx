import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import '../styles/main.css'
//
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/global/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
