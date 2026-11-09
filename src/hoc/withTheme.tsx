import { memo, type ComponentType } from 'react';
import type { ThemeProps } from '../types';

export function withTheme<P extends ThemeProps>(WrappedComponent: ComponentType<P>) {
  const WithTheme = memo(function WithTheme(props: P) {
    return <WrappedComponent {...props} />;
  });

  WithTheme.displayName = `withTheme(${WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component'})`;
  return WithTheme;
}
