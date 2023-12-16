import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css'; // Import your global styles here
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getCookie, loadDefaults } from '../utils/utils';
import { Global } from '@emotion/react';
import globalStyles from '../public/globalStyles.styles.js';
import { StyledEngineProvider } from '@mui/material/styles';
//config:
// import config_json from '../configuration.json';
//
import config_yaml from '../configuration.yaml';

function App({ Component, pageProps, config_yml }) {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    const cookie_theme = getCookie('theme');
    if (cookie_theme) {
      setTheme(cookie_theme);
    }
    console.log(config_yaml);
  }, []);
  // let config = parseYAML('configuration.yaml');
  // console.log(config_yml);
  // let config = {};
  // let config = config_yml;
  // config = loadDefaults(config_yml);
  const config = config_yaml;
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Global styles={() => globalStyles(theme, config)} />
        <Head>
          <title>{config.site_title ? config.site_title : config.name}</title>
          <meta name="description" content={config.site_description} />
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
        </Head>
        <Layout theme={theme} setTheme={setTheme} config={config}>
          <Component {...pageProps} theme={theme} config={config} />
        </Layout>
      </StyledEngineProvider>
    </>
  );
}
export const getStaticProps = async () => {
  let config_yml = parseYAML();
  console.log(config_yml);

  return {
    props: { config_yml: config_yml },
  };
};

export default App;
