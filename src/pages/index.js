import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import styled from '@emotion/styled';

import Box from '../components/Box';
import Layout from '../components/layout';
import Link from '../components/Link';
import {SiteHeader} from '../layout/SiteHeader';
import {SiteHeaderBio} from '../layout/SiteHeaderBio';

const PostTitleLink = styled(Link)`
  color: ${({theme}) => theme.colors[3]};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${({theme}) => theme.colors.accent};
  }
`;

export default function Index({data = {}}) {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Layout>
      <Box
        // display={['block', 'block', 'block', 'block', 'grid']}
        display="grid"
        gridTemplateColumns={'300px 1fr'}
        gridTemplateAreas={[
          "'bio bio' 'blog blog'",
          "'bio bio' 'blog blog'",
          "'bio bio' 'blog blog'",
          "'bio bio' 'blog blog'",
          "'bio blog'",
        ]}
        gridGap="40px"
        maxWidth="55em"
        mt={3}
        mx="auto"
      >
        <Box gridArea="bio" mt={3}>
          <SiteHeaderBio />
        </Box>
        <Box gridArea="blog" maxWidth="38em">
          <Box as="h2" fontSize={4} mb={4}>
            Articles
          </Box>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({node: post}) => {
              return (
                <Box
                  css={{
                    '& + &': {
                      marginTop: '3rem',
                    },
                  }}
                  key={post.id}
                >
                  <Box as="h2" fontFamily="serif" fontSize={2} mb={2}>
                    <PostTitleLink color="grays.2" to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </PostTitleLink>
                  </Box>
                  <Box fontSize={0} as="p">
                    Posted on {post.frontmatter.date}
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Layout>
  );
}
Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: {order: DESC, fields: [fileAbsolutePath]}
      filter: {frontmatter: {draft: {ne: true}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            excerpt
          }
        }
      }
    }
  }
`;
