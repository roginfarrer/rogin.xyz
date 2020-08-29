import React from 'react';
import me from '../images/me.jpg';
import Box from '../components/Box';
import Stack from '../components/Stack';
import Link from '../components/Link';

export function SiteHeaderBio() {
  return (
    <>
      <Box
        display="grid"
        gridGap="16px"
        gridTemplateColumns={['auto', '1fr 1.5fr', 'auto']}
        gridTemplateAreas={[
          "'name name' 'pic pic' 'bio bio' 'links links'",
          "'name name' 'pic bio' 'links links'",
          "'name name' 'pic bio' 'pic links'",
          "'name name' 'pic bio' 'pic links'",
          "'name name' 'pic pic' 'bio bio' 'links links'",
        ]}
      >
        <Box as="h1" fontSize={4} gridArea="name">
          Rogin Farrer
        </Box>
        <Box
          gridArea="pic"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            borderRadius="50%"
            overflow="hidden"
            maxWidth={['150px', '100%', '100%', '150px']}
          >
            <Box
              as="img"
              alt="Rogin smiling"
              src={me}
              transform="translateY(10%) scale(1.25)"
              borderRadius="50%"
            />
          </Box>
        </Box>
        <Box gridArea="bio" display="flex" alignItems="center">
          <Box as="p">
            I'm a Software Engineer building <i>design systems</i> at Wayfair in
            Boston. Most days you can find me neck-deep in React, Node.js, CSS,
            and a cup of coffee.
          </Box>
        </Box>
        <Stack as="ul" ml={1} gap="-2px" gridArea="links">
          <ExternalItem emoji="💻">
            Review my pull requests on&nbsp;
            <Link
              openInNewWindow
              external
              href="https://github.com/roginfarrer"
            >
              Github
            </Link>
          </ExternalItem>
          <ExternalItem emoji="🦉">
            Follow me on&nbsp;
            <Link
              openInNewWindow
              external
              href="https://twitter.com/roginfarrer"
              _target="blank"
            >
              Twitter
            </Link>
          </ExternalItem>
          <ExternalItem emoji="💼">
            Connect with me on&nbsp;
            <Link
              openInNewWindow
              external
              href="https://www.linkedin.com/in/roginfarrer/"
            >
              LinkedIn
            </Link>
          </ExternalItem>
        </Stack>
      </Box>
    </>
  );
}

function ExternalItem({emoji, children}) {
  return (
    <Box as="li" display="flex" alignItems="center">
      <Box as="span" mr={3} fontSize={3}>
        {emoji}
      </Box>
      <span>{children}</span>
    </Box>
  );
}
