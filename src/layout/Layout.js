import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';
import {ThemeProvider} from 'emotion-theming';
import {Global} from '@emotion/core';

import {globalStyle} from '../globalStyle';
import {theme as globalTheme} from '../theme';
import '../assets/styles/style.css';
import Box from '../components/Box';

const Container = ({children}) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Global styles={globalStyle(globalTheme)} />
      <Box px={[3, 3, 3, 5]} bg="white" transition="background-color .2s ease">
        <Box color="grays.2" lineHeight="1.5" m="0 auto">
          {children}
        </Box>
      </Box>
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
              {name: 'theme-color', content: globalTheme.colors.accent},
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
