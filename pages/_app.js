import React from 'react';
import {ThemeProvider} from 'contexts/themeContext';
import {SessionProvider} from 'next-auth/react';
import '../styles/globals.css';

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
      <div className="app">
          <SessionProvider session={ session }>
              <ThemeProvider>
                  <Component { ...pageProps } />
              </ThemeProvider>
          </SessionProvider>
       </div>
  );
}

export default MyApp;
