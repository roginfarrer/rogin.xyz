import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import styled from '@emotion/styled';

import Layout from './layout';
import MarkdownWrapper from './markdown-wrapper';
import {SiteHeader} from '../layout/SiteHeader';

const Article = styled.article`
  max-width: ${({theme}) => theme.pageWidth};
  margin: 0 auto;
`;

const ArticleTitle = styled.h1`
  font-family: ${({theme}) => theme.fonts.serif};
  font-size: ${({theme}) => theme.fontSizes[2]};
  // ${({theme}) => theme.media.sm`
  //   font-size: ${theme.fontSizes[2]};
  // `};
  margin: 1.5em 0 0.5em;
`;

const ArticleDate = styled.p`
  margin: 1.5em 0;
  font-family: ${({theme}) => theme.fonts.serif};
  font-variant: small-caps;
`;

const Template = ({data}) => {
  const {markdownRemark: post} = data;
  return (
    <Layout>
      <SiteHeader />
      <Article>
        <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
        <ArticleDate>{post.frontmatter.date}</ArticleDate>
        <MarkdownWrapper dangerouslySetInnerHTML={{__html: post.html}} />
      </Article>
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
