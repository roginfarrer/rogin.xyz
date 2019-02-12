import styled from '@emotion/styled';

const LinkButton = styled.a`
  border-radius: 3px;
  color: ${({color}) => color || null};
  transition-property: color, background-color, border-color;
  transition-duration: 400ms;
  transition-timing-function: ease;
  padding: 0.25em 0.5em 0.1em;
  position: relative;
  &:hover,
  &:focus {
    background-color: ${({theme}) => theme.color.primary};
    color: white;
  }
`;

export default LinkButton;
