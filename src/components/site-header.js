import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import styled, {keyframes} from 'styled-components';

const colorChange = theme => keyframes`
  0% { color: ${theme.color.red}; }
  50% { color: ${theme.color.primary}; }
  100% { color: ${theme.color.red}; }
`;

const HeaderContainer = styled.header`
  max-width: ${({theme}) => theme.pageWidth};
  margin: 2em auto 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1rem;
  flex: 1;
`;

const TitleLink = styled(Link)`
  color: ${({theme}) => theme.color.base};

  &:hover,
  &:focus {
    animation: ${({theme}) => `${colorChange(theme)} 1s linear infinite`};
  }
`;

const TitleByline = styled.span`
  color: ${({theme}) => theme.color.lightBase};
  display: block;
  font-weight: normal;
  font-style: italic;
  margin-top: 0.25rem;
`;

const StyledHeader = ({siteTitle, showByline}) => (
  <HeaderContainer>
    <Title>
      Hi, I&apos;m&nbsp;
      <TitleLink to="/">{siteTitle}</TitleLink>.
      {showByline && (
        <TitleByline>
          A personal blog about technology, web development, and some IRL stuff.
        </TitleByline>
      )}
    </Title>
  </HeaderContainer>
);
StyledHeader.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  showByline: PropTypes.bool,
};
StyledHeader.defaultProps = {
  showByline: false,
};

export default StyledHeader;
