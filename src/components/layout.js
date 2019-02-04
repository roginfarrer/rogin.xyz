import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';
import styled, {ThemeProvider} from 'styled-components';

import {globalStyle} from '../globalStyle';
import {theme as globalTheme} from '../theme';
import Footer from './site-footer';
import '../assets/styles/style.css';

const PageContainer = styled.div`
  padding: 0 15px;
`;

const Content = styled.main`
  color: ${({theme}) => theme.color.base};
  line-height: 1.5;
  margin: 0 auto;
`;

const Container = ({children, theme}) => (
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
            {name: 'theme-color', content: theme.color.primary},
          ]}
        >
          <html lang="en" />
        </Helmet>
        <PageContainer>
          <Content>{children}</Content>
          <Footer />
        </PageContainer>
      </>
    )}
  />
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
};

export default class WrappedContainer extends React.Component {
  constructor(props) {
    super(props);
    globalStyle(globalTheme);
  }

  render() {
    return (
      <ThemeProvider theme={globalTheme}>
        <Container {...this.props} theme={globalTheme} />
      </ThemeProvider>
    );
  }
}
