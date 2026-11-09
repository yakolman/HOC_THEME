import type { ThemeProps } from '../types';
import './ThemedButton.css';

export interface ThemedButtonProps extends ThemeProps {
  label: string;
}

export function ThemedButton({ theme, label }: ThemedButtonProps) {
  return (
    <button className="themed-button" type="button" data-theme={theme}>
      {label}
    </button>
  );
}
