import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import create_mui_theme from '../mui_theme/theme';

function Layout({ children, theme, setTheme, config }) {
  return (
    <>
      <ThemeProvider theme={create_mui_theme({ theme: theme })}>
        <main>
          <div
            id="container"
            className="container h-100 d-flex flex-column"
            style={{ minHeight: '100vh' }}
          >
            <Header theme={theme} setTheme={setTheme} config={config} />
            <div id="content" className="w-100 h-100">
              {children}
            </div>
            <Footer />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default Layout;
