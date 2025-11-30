import { useState, useEffect } from 'react';

const STORAGE_KEY = 'preferred-theme';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY);
}

function setStoredTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}

function applyTheme(theme) {
  document.documentElement.style.colorScheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
}

function getCurrentTheme() {
  const stored = getStoredTheme();
  if (stored) return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_DARK
    : THEME_LIGHT;
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getCurrentTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    // Listen for system theme changes (if no manual override)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!getStoredTheme()) {
        setTheme(e.matches ? THEME_DARK : THEME_LIGHT);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    setStoredTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      className="theme-toggle-btn"
      aria-label="Toggle theme"
      title="Toggle light/dark theme"
      onClick={toggleTheme}
    >
      <img
        src="/icons/light-theme-black.svg"
        alt="Switch to light theme"
        className="theme-icon-light"
        width="24"
        height="24"
        style={{ display: theme === THEME_DARK ? 'block' : 'none' }}
      />
      <img
        src="/icons/dark-theme-black.svg"
        alt="Switch to dark theme"
        className="theme-icon-dark"
        width="24"
        height="24"
        style={{ display: theme === THEME_LIGHT ? 'block' : 'none' }}
      />
    </button>
  );
}

export default ThemeToggle;

