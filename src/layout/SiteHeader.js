import React from 'react';
import styled from '@emotion/styled';
import {css, keyframes} from '@emotion/core';
import me from '../images/me.jpg';
import Box from '../components/Box';
import Stack from '../components/Stack';
import Link from '../components/Link';

export function SiteHeader() {
  return (
    <Stack gap={4}>
      <Box as="header" display="flex" justifyContent="space-between" mt={3}>
        <Box as="h1" fontSize={2}>
          Rogin Farrer
        </Box>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </Box>
      <Box
        // flexDirection={['column', 'row']}
        display="grid"
        gridGap="16px"
        // gridTemplateRows="auto"
        gridTemplateColumns="1fr 1.5fr"
        gridTemplateAreas={[
          "'pic pic' 'bio bio' 'links links'",
          "'pic bio' 'links links'",
          "'pic bio' 'pic links'",
        ]}
        // alignItems="center"
        // justifyContent="center"
        // gap="16px"
      >
        <Box
          gridArea="pic"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            borderRadius="50%"
            overflow="hidden"
            maxWidth={['150px', '100%', '100%']}
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
    </Stack>
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
