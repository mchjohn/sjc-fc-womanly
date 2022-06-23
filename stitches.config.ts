import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFD',
      black: '#222222',
      blue900: '#03117C',
      blue800: '#0333A1',
      blue600: '#0A66C2',
      yellow: '#FED700',
    },
  },
  media: {
    bp1: '(min-width: 670px)',
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
  },
});
