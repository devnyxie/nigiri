import { Global } from '@emotion/react';
import React from 'react';
import globalStyles from '../../pages/styles/globalStyles';

import Header from '../header/Header';
import Footer from '../footer/Footer';

function Layout({ children, theme, setTheme }) {
  return (
    <>
      <Global styles={() => globalStyles(theme)} />
      <main className="">
        <div
          id="container"
          className="container h-100 d-flex flex-column"
          style={{ minHeight: '100vh' }}
        >
          <Header theme={theme} setTheme={setTheme} />
          <div id="content" className="w-100 h-100">
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
}

export default Layout;
