import React from 'react';
import logo from '../Images/altdough15.jpg';
import {css} from '@emotion/react/macro';

const Logo = ({width}) => {
  return (
    <img 
      src={logo} 
      alt="Alternative Dough logo"
      width={width}  
      css={css`
        border: 1px solid black;
        border-radius: 50%;
        box-shadow: 0px 0px 24px 10px rgba(0,0,0,0.1);
      `}
    />
  )
}

Logo.defaultProps = {
  width: '160px'
};

export default Logo;