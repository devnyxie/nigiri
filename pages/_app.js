import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { Global } from '@emotion/react';
import globalStyles from '../public/globalStyles.styles.js';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'next-themes';
import config from '../configuration.yaml';
import '../styles/github-markdown.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically import Bootstrap JS only on client
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <Global styles={globalStyles(config)} />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Head>
          <title>{config.site_title || config.name}</title>
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
          <link 
            rel="alternate" 
            type="application/rss+xml" 
            title={`RSS Feed for ${config.name}'s Blog`}
            href="/api/feed.xml" 
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Layout config={config}>
          <Component {...pageProps} config={config} />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
