import React from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import UserInput from './UserInput';
import Logo from './Logo';
const Headerrr = styled.div`
   display: flex;
      justify-content: space-around;
      align-items: center;
      font-family: 'Chewy', cursive;
`;

const Line = styled.div`
  height: 3px;
  background: var(--offwhite);
  width: 100%;
  margin: 9px;
  border-radius: 5px;
`;

function Header({ input, setInput, flours, selectBlend, handleMenuToggle }) {
  return (
    <Headerrr>
      <Logo width="80px" />
      <UserInput input={input} setInput={setInput}  />
      <div 
        onClick={handleMenuToggle}
        css={css`
          width: 40px;
          height: 40px;
          background: red;
          cursor: pointer;
        `}
      >
        <Line />
        <Line />
        <Line />
      </div>
    </Headerrr>
  )
}

export default Header;