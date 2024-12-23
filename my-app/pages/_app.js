import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

  git config --global user.email "vanessachow0000@gmail.com"
  git config --global user.name  "yellowbanana20"