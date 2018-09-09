import {css} from 'styled-components';

const sansSerifFallback = `"BlinkMacSystemFont", -apple-system, "Helvetica Neue",
Helvetica, sans-serif`;

const serifFallback = `"Merriweather, Georgia, serif"`;

export const breakpoints = {
  xs: 450,
  sm: 640,
  md: 1024,
  lg: 1141,
  xl: 1400
};

export const theme = {
  color: {
    base: '#221924',
    lightBase: '#666',
    lighterBase: '#999',
    primary: '#007acc',
    red: '#d14054',
    brands: {
      github: '#0366d6',
      twitter: '#1da1f2',
      linkedin: '#0074b6'
    }
  },
  serifFallback,
  fontFamily: {
    sansSerif: `"Catamaran", ${sansSerifFallback}`,
    serif: `"Vollkorn", ${serifFallback}`
  },
  fontSize: {
    small: '0.8125rem', // 13px
    body: '1rem', // 16px
    medium: '1.25rem', // 20px
    large: '1.5rem', // 24px
    xl: '2rem', // 32px
    roadsign: '3rem' // 48
  },
  media: {
    ...Object.keys(breakpoints).reduce((acc, label) => {
      // `any` type below to allow whatever values that styled-components accepts in the css function
      acc[label] = (...args) => css`
        @media screen and (min-width: ${breakpoints[label]}px) {
          ${css(...args)};
        }
      `;
      return acc;
    }, {})
  },
  pageWidth: '36rem'
};
