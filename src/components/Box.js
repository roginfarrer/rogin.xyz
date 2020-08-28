import styled from '@emotion/styled';
import {
  border,
  shadow,
  typography,
  position,
  grid,
  space,
  color,
  layout,
  flexbox,
  system,
  compose,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

const Box = styled('div', {shouldForwardProp})(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(
    border,
    shadow,
    typography,
    position,
    grid,
    space,
    color,
    layout,
    flexbox,
    system({
      transform: true,
      textDecoration: true,
      gridGap: {
        scale: 'space',
        property: 'gridGap',
      },
    })
  )
);

export default Box;
