import { ThemeProvider } from '@emotion/react';
import { memo, useMemo } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import create_mui_theme from '../mui_theme/theme';

const Layout = memo(function Layout({ children, config }) {
  const muiTheme = useMemo(() => create_mui_theme({}), []);
  
  return (
    <ThemeProvider theme={muiTheme}>
      <main>
        <div
          id="container"
          className="container h-100 d-flex flex-column"
          style={{ minHeight: '100vh' }}
        >
          <Header config={config} />
          <div id="content" className="w-100 h-100">
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
});

export default Layout;
