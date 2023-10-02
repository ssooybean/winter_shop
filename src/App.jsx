import Home from './pages/Home';
import About from './pages/About';
import { useEffect, useRef, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components';
import { normal } from './styles/Theme.js';
import NewCollection from './pages/NewCollection';
import Sail from './pages/Sail';
import Contacts from './pages/Contacts';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      let locomotiveScroll = new LocomotiveScroll({ autoStart: false });

      if (!isLoaded) locomotiveScroll.stop();
      else locomotiveScroll.start();
    })();
  }, [isLoaded]);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={normal}>
        <AnimatePresence>
          {!isLoaded && <Loader key='loader' isLoaded={isLoaded} />}
        </AnimatePresence>
        <main data-scroll-container>
          <Home />
          <About />
          <NewCollection />
          <Sail />
          <Contacts />
        </main>
      </ThemeProvider>
    </>
  );
}
export default App;
