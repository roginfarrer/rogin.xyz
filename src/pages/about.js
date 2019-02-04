import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled, {keyframes} from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/site-header';
import {theme as globalTheme} from '../theme';

const avatarEnter = keyframes`
  0% {
    transform: rotate(-20deg) scale(.9);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
`;

const Page = styled.article`
  max-width: ${({theme}) => theme.pageWidth};
  margin: 2em auto;
`;

const MeContainer = styled.div`
  max-width: 400px;
  margin: 0 auto 2em;
`;

const Me = styled(Img)`
  border-radius: 50%;
  animation: ${avatarEnter} 3s ease;
`;

const P = styled.p`
  margin-bottom: 1.25em;
`;

const SocialAnchor = styled.a`
  color: ${({color}) => color};
`;

const StyledSocialAnchor = props => (
  <SocialAnchor rel="noopener noreferrer" target="_blank" {...props} />
);

export default function About({data}) {
  return (
    <Layout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Page>
        <MeContainer>
          <Me sizes={data.avatarImg.childImageSharp.sizes} />
        </MeContainer>
        <P>
          I&apos;m Rogin Farrer, and I&apos;m a web developer at{' '}
          <a
            href="https://wayfair.com"
            rel="noopener noreferrer"
            target="blank"
          >
            Wayfair
          </a>
          {/* Prettier makes this weird line :/
              eslint-disable-next-line react/jsx-child-element-spacing
          */}
          . I work on the Wayfair&apos;s Homebase Design Systems
          (customer-facing brands, internal applications, supplier portal, and
          everything in between).
        </P>
        <P>
          Find me on{' '}
          <StyledSocialAnchor
            color={globalTheme.color.brands.twitter}
            href="https://twitter.com/roginfarrer"
          >
            Twitter
          </StyledSocialAnchor>
          ,{' '}
          <StyledSocialAnchor
            color={globalTheme.color.brands.github}
            href="https://github.com/roginfarrer"
          >
            Github
          </StyledSocialAnchor>
          , and{' '}
          <StyledSocialAnchor
            color={globalTheme.color.brands.linkedin}
            href="https://www.linkedin.com/in/roginfarrer/"
          >
            LinkedIn
          </StyledSocialAnchor>
          .
        </P>
      </Page>
    </Layout>
  );
}
About.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    avatarImg: file(relativePath: {eq: "avatar-cropped.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
