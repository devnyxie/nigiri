// _app.js
import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css'; // Import your global styles here
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getCookie } from '../utils/utils';

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    const cookie_theme = getCookie('theme');
    if (cookie_theme) {
      setTheme(cookie_theme);
    }
  }, []);
  return (
    <>
      <Head>
        <title>devnyxie</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Add more favicon links as needed */}
      </Head>
      <Layout theme={theme} setTheme={setTheme}>
        <Component {...pageProps} theme={theme} />
      </Layout>
    </>
  );
}

export default App;
