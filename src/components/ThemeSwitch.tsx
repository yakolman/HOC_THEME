import type { ThemeType } from '../types';
import './ThemeSwitch.css';

interface ThemeSwitchProps {
  theme: ThemeType;
  onToggle: () => void;
}

export function ThemeSwitch({ theme, onToggle }: ThemeSwitchProps) {
  return (
    <button
      className="theme-switch"
      type="button"
      onClick={onToggle}
      aria-pressed={theme === 'dark'}
    >
      Переключить тему (сейчас: {theme})
    </button>
  );
}
