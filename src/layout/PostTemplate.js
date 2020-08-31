import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import styled from '@emotion/styled';
import {keyframes, css} from '@emotion/core';

import Layout from '../layout/Layout';

import MarkdownWrapper from '../components/MarkdownWrapper';
import Box from '../components/Box';
import Link from '../components/Link';
import Stack from '../components/Stack';

const colorChange = theme => keyframes`
  0% { color: #d14054; }
  50% { color: ${theme.colors.accent}; }
  100% { color: #d14054; }
`;

const RoginFarrer = styled(Box)`
  animation: ${({theme}) =>
    css`
      ${colorChange(theme)} 1s linear infinite
    `};
`;

const Template = ({data}) => {
  const {markdownRemark: post} = data;
  return (
    <Layout>
      <Box mx="auto" maxWidth="38em" mt={3}>
        <RoginFarrer
          as="h3"
          fontSize={3}
          fontFamily="serif"
          color="grays.1"
          mb={4}
          textAlign="center"
        >
          <Link to="/" textDecoration="none" color="inherit">
            Rogin Farrer
          </Link>
        </RoginFarrer>
        <Stack as="article" gap={4}>
          <Box
            as="h1"
            textAlign="center"
            fontFamily="serif"
            fontSize={[3, , 5]}
          >
            {post.frontmatter.title}
          </Box>
          <Box
            color="grays.1"
            as="time"
            fontFamily="serif"
            fontVariant="small-caps"
            textAlign="center"
            display="block"
          >
            {post.frontmatter.date}
          </Box>
          <MarkdownWrapper dangerouslySetInnerHTML={{__html: post.html}} />

          <Link
            to="/"
            color="white"
            textDecoration="none"
            bg="accent"
            borderRadius="5px"
            textAlign="center"
            display="block"
            py={2}
            mb={5}
          >
            <span aria-hidden="true">👈</span>&nbsp;&nbsp; Back
          </Link>
        </Stack>
      </Box>
    </Layout>
  );
};
Template.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
      }
    }
  }
`;

export default Template;
