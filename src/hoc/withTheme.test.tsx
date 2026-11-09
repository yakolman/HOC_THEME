import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { withTheme } from './withTheme';
import type { ThemeProps } from '../types';

interface SampleProps extends ThemeProps {
  label: string;
}

function Sample({ theme, label }: SampleProps) {
  return <div data-theme={theme}>{label}</div>;
}

const EnhancedSample = withTheme(Sample);

describe('withTheme', () => {
  it('передаёт светлую тему и остальные props', () => {
    const html = renderToStaticMarkup(createElement(EnhancedSample, { theme: 'light', label: 'Тест' }));
    expect(html).toContain('data-theme="light"');
    expect(html).toContain('Тест');
  });

  it('принимает обновлённую тему', () => {
    const html = renderToStaticMarkup(createElement(EnhancedSample, { theme: 'dark', label: 'Новая тема' }));
    expect(html).toContain('data-theme="dark"');
  });

  it('сохраняет имя компонента для React DevTools', () => {
    expect(EnhancedSample.displayName).toBe('withTheme(Sample)');
  });
});
