import { useState } from 'react';
import { ThemeSwitch } from './components/ThemeSwitch';
import { ThemedButton } from './components/ThemedButton';
import { withTheme } from './hoc/withTheme';
import type { ThemeType } from './types';
import './App.css';

const ButtonWithTheme = withTheme(ThemedButton);

export default function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  function toggleTheme() {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <main className="app" data-theme={theme}>
      <div className="app__actions">
        <ThemeSwitch theme={theme} onToggle={toggleTheme} />
        <ButtonWithTheme theme={theme} label="Кнопка с темой" />
      </div>
    </main>
  );
}
