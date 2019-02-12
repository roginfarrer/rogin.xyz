import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const Footer = styled.footer`
  border-top: 1px solid #666;
  margin: 3em auto 0;
  padding: 1em 0.5em;
  max-width: ${({theme}) => theme.pageWidth};
`;

const TwitterLink = styled.a`
  color: ${({theme}) => theme.color.brands.twitter};
`;

const GithubLink = styled.a`
  color: ${({theme}) => theme.color.brands.github};
`;

const FooterText = styled.span`
  display: flex;
  font-size: ${({theme}) => theme.fontSize.small};
  justify-content: space-between;
`;

const SiteFooter = () => (
  <Footer>
    <FooterText>
      <p>
        You can find me on{' '}
        <TwitterLink href="https://twitter.com/roginfarrer">
          Twitter
        </TwitterLink>{' '}
        and{' '}
        <GithubLink href="https://github.com/roginfarrer">Github</GithubLink>.{' '}
      </p>
      <p>
        <Link to="/about">Want more?</Link>
      </p>
    </FooterText>
  </Footer>
);

export default SiteFooter;
