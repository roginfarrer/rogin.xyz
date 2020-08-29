import {css} from '@emotion/core';

export const globalStyle = theme => css`
  html {
    font-family: ${theme.fonts.sansSerif};
    font-size: 18px;
  }

  body {
    -webkit-font-smoothing: ${theme.useAntiAliasing ? 'antialiased' : ''};
    min-height: 100vh;
    font-size: ${theme.fontSizes[1]};
  }

  a {
    color: ${theme.colors.accent};
  }

  p {
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`;
