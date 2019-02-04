import styled from 'styled-components';
import {hexToRgb} from '../utils';

const MarkdownWrapper = styled.div`
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  blockquote,
  li {
    word-break: break-word;
  }
  h3 {
    font-size: ${({theme}) => theme.fontSize.large};
  }
  h4 {
    font-size: ${({theme}) => theme.fontSize.medium};
  }
  h3,
  h4 {
    line-height: 1.25;
    margin: 1.5em 0 0.5em;
  }

  p,
  figure,
  ul,
  ol {
    margin-bottom: 1.25em;
  }

  h3 {
    font-weight: 700;
  }

  li {
    list-style: none;
    margin-bottom: 0.5em;
  }

  ul,
  ol {
    padding-left: 3em;
    counter-reset: listCounter;
    li {
      &::before {
        color: ${({theme}) => theme.color.primary};
        position: absolute;
      }
      counter-increment: listCounter;
      position: relative;
    }
  }

  ol li {
    list-style: none;
    &::before {
      content: counter(listCounter, decimal-leading-zero);
      right: 1em;
      font-size: 0.8rem;
      font-weight: bold;
      position: relative;
      bottom: 0.2em;
    }
  }

  ul li::before {
    content: counter(listCounter, disc);
    left: -1.25em;
    font-weight: bold;
  }

  hr {
    margin: 3em 0;
    border-top: ${({theme}) => `1px solid ${theme.color.lighterBase}`};
  }

  blockquote {
    color: ${({theme}) => theme.color.lightBase};
    font-size: ${({theme}) => theme.fontSize.large};
    position: relative;
    margin: 2em 0;
    &::before {
      content: '';
      height: 120%;
      width: 2em;
      background-color: #017acc40;
      position: absolute;
      left: -0.75em;
      transform: matrix(1, 1, 0, -1, -8, -17);
    }
  }

  p > code.language-text {
    background-color: ${({theme}) =>
      `rgba(${hexToRgb(theme.color.primary)}, 0.1)`};
    color: ${({theme}) => theme.color.primary};
    font-family: 'Consolas', 'Courier Prime', menlo, monospace;
    padding: 0 0.2rem;
  }

  figure {
    margin: 0 0 1.25em;
    text-align: center;
    ${({theme}) => theme.media.md`
      margin: 0 -5em 1.25em;
    `};
    figcaption {
      color: ${({theme}) => theme.color.lightBase};
      font-size: ${({theme}) => theme.fontSize.small};
    }
  }
`;

export default MarkdownWrapper;
