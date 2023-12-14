// _app.js
import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
// import bootstrap from 'bootstrap';
import './styles/styles.css'; // Import your global styles here
import { useEffect, useState } from 'react';

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    console.log('theme changed', theme);
  }, [theme]);
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <Layout theme={theme} setTheme={setTheme}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
