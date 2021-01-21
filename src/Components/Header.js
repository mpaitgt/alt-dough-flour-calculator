import React from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import UserInput from './UserInput';

const Headerrr = styled.div`
  display: flex;
  background: var(--green);
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  font-family: 'Chewy', cursive;
  height: 100%;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 0px 24px 10px rgba(0,0,0,0.1);
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const MenuIcon = styled.div`
  font-size: 62px;
  transform: ${props => props.menuVisible ? 'rotate(0deg)' : 'rotate(90deg)'};
  cursor: pointer;
  transform-origin: center;
  transition: transform 0.25s;
  @media (max-width: 934px) {
    transform: ${props => props.menuVisible ? 'rotate(180deg)' : 'rotate(90deg)'};
  }
`;

function Header({ input, setInput, flours, selectBlend, handleMenuToggle, menuVisible }) {
  return (
    <Headerrr>
      <UserInput input={input} setInput={setInput}  />
      <MenuIcon menuVisible={menuVisible} onClick={handleMenuToggle}>
        {'>'}
      </MenuIcon>
    </Headerrr>
  )
}

export default Header;