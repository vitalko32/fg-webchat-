import React, { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(
      localStorage.theme ? JSON.parse(localStorage.theme) : false
  );

  useEffect(() => {
    isDarkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  });

  const toggleDarkMode = () => {
    const mode = !isDarkMode;
    setIsDarkMode(mode);
    localStorage.setItem("theme", JSON.stringify(mode));
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeSwitch;
