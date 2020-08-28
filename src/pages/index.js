import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import styled from '@emotion/styled';

import Box from '../components/Box';
import Layout from '../components/layout';
import {SiteHeader} from '../layout/SiteHeader';
// import SiteHeader from '../components/site-header';

// const BlogIndex = styled.section`
//   margin: 3em auto 0;
//   max-width: ${({theme}) => theme.pageWidth};
// `;

// const Post = styled.section`
//   & + & {
//     margin-top: 3rem;
//   }
// `;

const PostFooter = styled.div`
  margin-top: 1rem;
`;

// const PostTitle = styled.h2`
//   font-family: ${({theme}) => theme.fontFamily.serif};
//   font-size: ${({theme}) => theme.fontSize.large};
//   margin-bottom: 0.5rem;
// `;

const PostTitleLink = styled(Link)`
  color: ${({theme}) => theme.colors[3]};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${({theme}) => theme.colors.accent};
  }
`;

const PostDate = styled.p`
  font-size: ${({theme}) => theme.fontSizes[0]};
  margin: 0;
`;

export default function Index({data = {}}) {
  const {edges: posts} = data.allMarkdownRemark;
  const {
    site: {
      siteMetadata: {title, author},
    },
  } = data;
  return (
    <Layout>
      <SiteHeader />
      <Box m="3em auto 0" maxWidth="38em">
        <h2>Articles</h2>
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
                <Box as="h2" fontSize={4} mb="0.5rem">
                  <PostTitleLink to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </PostTitleLink>
                </Box>
                <p>
                  {post.frontmatter.excerpt ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.excerpt,
                      }}
                    />
                  ) : (
                    post.excerpt
                  )}
                </p>
                <PostFooter>
                  <PostDate>Posted on {post.frontmatter.date}</PostDate>
                </PostFooter>
              </Box>
            );
          })}
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
