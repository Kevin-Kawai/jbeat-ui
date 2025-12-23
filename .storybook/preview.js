import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    options: {
      light: { name: 'light', value: '#ffffff' },
      dark: { name: 'dark', value: '#1a1a1a' }
    }
  }
};

export const initialGlobals = {
  backgrounds: {
    value: 'light'
  }
};
