import React, { useState, useEffect } from 'react';
import './styled.css';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Almacenar el estado en localStorage para persistencia
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode) {
      setDarkMode(JSON.parse(isDarkMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    applyTheme();
  }, [darkMode]);

  const applyTheme = () => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <label className='switch'>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className='slider'></span>
      </label>
    </div>
  );
};

export default DarkMode;
