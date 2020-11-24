import React from 'react';
import Logo from './Logo';
import {css} from '@emotion/react';

const Footer = () => {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex-grow: 1;
    `}>
      <Logo width="300px" />
    </div>
  )
}

export default Footer;