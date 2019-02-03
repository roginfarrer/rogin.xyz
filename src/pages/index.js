import React from 'react';
import Layout from '../components/layout';
import {Link, graphql} from 'gatsby';
import styled from 'styled-components';
import SiteHeader from '../components/site-header';

const BlogIndex = styled.section`
  margin: 3em auto 0;
  max-width: ${({theme}) => theme.pageWidth};
`;

const Post = styled.section`
  & + & {
    margin-top: 3rem;
  }
`;

const PostFooter = styled.div`
  margin-top: 1rem;
`;

const PostTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSize.large};
  margin-bottom: 0.5rem;
`;

const PostTitleLink = styled(Link)`
  color: ${({theme}) => theme.color.base};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${({theme}) => theme.color.primary};
  }
`;

const PostDate = styled.p`
  font-size: ${({theme}) => theme.fontSize.small};
  margin: 0;
`;

export default function Index({data = {}}) {
  const {edges: posts} = data.allMarkdownRemark;
  const {
    site: {
      siteMetadata: {title, author}
    }
  } = data;
  return (
    <Layout>
      <SiteHeader siteTitle={title} author={author} showByline />
      <BlogIndex>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({node: post}) => {
            return (
              <Post key={post.id}>
                <PostTitle>
                  <PostTitleLink to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </PostTitleLink>
                </PostTitle>
                <p>
                  {post.frontmatter.excerpt ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.excerpt
                      }}
                    />
                  ) : (
                    post.excerpt
                  )}
                </p>
                <PostFooter>
                  <PostDate>Posted on {post.frontmatter.date}</PostDate>
                </PostFooter>
              </Post>
            );
          })}
      </BlogIndex>
    </Layout>
  );
}

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
