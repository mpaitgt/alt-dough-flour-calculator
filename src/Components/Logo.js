import React from 'react';
import logo from '../Images/altdough15.jpg';
import styled from '@emotion/styled';

const Image = styled.img`
  border-radius: 50%;
  /* box-shadow: 0px 100px 24px 0px rgba(0,0,0,0.1); */
  position: absolute;
  top: 0;
`;

const Logo = ({width}) => {
  return (
    <Image 
      src={logo} 
      alt="Alternative Dough logo"
      width={width}
    />
  )
}

Logo.defaultProps = {
  width: '160px'
};

export default Logo;