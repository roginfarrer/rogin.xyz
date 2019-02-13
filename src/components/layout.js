import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';
import styled from '@emotion/styled';
import {ThemeProvider} from 'emotion-theming';
import {Global} from '@emotion/core';

import {globalStyle} from '../globalStyle';
import {theme as globalTheme} from '../theme';
import Footer from './site-footer';
import '../assets/styles/style.css';

const PageContainer = styled.div`
  padding: 0 15px;
  background-color: ${({theme}) => theme.color.background};
  transition: background-color 0.2s ease;
`;

const Content = styled.main`
  color: ${({theme}) => theme.color.base};
  line-height: 1.5;
  margin: 0 auto;
`;

const Container = ({children}) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Global styles={globalStyle(globalTheme)} />
      <PageContainer>
        <Content>{children}</Content>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function WrappedContainer(props) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              author
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
              {name: 'theme-color', content: globalTheme.color.primary},
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Container {...props} />
        </>
      )}
    />
  );
}
