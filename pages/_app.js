import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(preferredTheme);
  }, []);

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
