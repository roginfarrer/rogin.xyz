import React from 'react';
import Box from '../components/Box';
import Link from '../components/Link';

export function SiteHeader() {
  return (
    <Box as="header" display="flex" justifyContent="space-between" mt={3}>
      <Box as="h1" fontSize={2}>
        <Link to="/" color="inherit" textDecoration="none">
          Rogin Farrer
        </Link>
      </Box>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </Box>
  );
}
