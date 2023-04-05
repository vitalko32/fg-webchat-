import React from 'react';
import {SessionProvider} from 'next-auth/react';
import '../styles/globals.css';

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
      <div className="app">
          <SessionProvider session={ session }>
              <Component { ...pageProps } />
          </SessionProvider>
       </div>
  );
}

export default MyApp;
