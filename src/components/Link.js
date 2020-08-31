import React, {forwardRef} from 'react';
import {Link as GLink} from 'gatsby';
import Box from './Box';

const Link = forwardRef(function Link(
  {openInNewWindow, external, ...props},
  forwardedRef
) {
  return (
    <Box
      as={external ? 'a' : GLink}
      target={openInNewWindow ? '_blank' : null}
      rel={external ? 'noopener' : null}
      {...props}
      ref={forwardedRef}
    />
  );
});

export default Link;
