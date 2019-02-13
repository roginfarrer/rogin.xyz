import {css} from '@emotion/core';

export const globalStyle = theme => css`
  html {
    font-family: ${theme.fontFamily.sansSerif};
    font-size: 18px;
  }

  body {
    -webkit-font-smoothing: ${theme.useAntiAliasing ? 'antialiased' : ''};
    min-height: 100vh;
    font-size: ${theme.fontSize.body}
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${theme.color.primary};
  }

  p {
    margin: 0;
  }

  /* a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    &:focus {
      outline: 1px dashed ${theme.color.base};
      outline-offset: 2px;
    }
  } */

  img {
    max-width: 100%;
  }
`;
