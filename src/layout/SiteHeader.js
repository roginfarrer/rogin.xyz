import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';
import {css, keyframes} from '@emotion/core';

export function SiteHeader() {
  return (
    <div>
      <header css={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>Rogin Farrer</h1>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <section
        css={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateRows: 'auto auto',
          gridTemplateColumns: '1fr 2fr',
          gridTemplateAreas: '"pic byline" "outlinks outlinks"',
        }}
      >
        <div css={{gridArea: 'pic'}}>
          <div
            css={{
              height: '20vw',
              width: '20vw',
              borderRadius: '50%',
              background: '#333',
            }}
          />
        </div>
        <div css={{gridArea: 'byline'}}>
          <p>
            I am a Software Engineer building <i>design systems</i> at Wayfair
            in Boston. Most days you can find me neck-deep in React, Node.js,
            CSS, and a cup of coffee.
          </p>
        </div>
        <ul css={{gridArea: 'outlinks', margin: 0}}>
          <li>
            Review my pull requests on{' '}
            <a href="https://github.com/roginfarrer">Github</a>
          </li>
          <li>
            Follow me on{' '}
            <a href="https://twitter.com/roginfarrer" _target="blank">
              Twitter
            </a>
          </li>
          <li>
            Connect with me on{' '}
            <a href="https://www.linkedin.com/in/roginfarrer/">LinkedIn</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
