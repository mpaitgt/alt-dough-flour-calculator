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
`;
const Burger = styled.div`
  width: 50px;
  height: 40px;
  cursor: pointer;
`;

const Line = styled.div`
  height: 6px;
  background: var(--offwhite);
  width: 100%;
  margin: 9px 0;
  border-radius: 5px;
`;

const MenuIcon = styled.div`
  font-size: 62px;
  transform: ${props => props.menuVisible ? 'rotate(0deg)' : 'rotate(90deg)'};
  cursor: pointer;
  transition: transform 0.25s;
`;

function Header({ input, setInput, flours, selectBlend, handleMenuToggle, menuVisible }) {
  return (
    <Headerrr>
      <UserInput input={input} setInput={setInput}  />
      {/* <Burger 
        onClick={handleMenuToggle}
      >
        <Line />
        <Line />
        <Line />
      </Burger> */}
      <MenuIcon menuVisible={menuVisible} onClick={handleMenuToggle}>
        {'>'}
      </MenuIcon>
    </Headerrr>
  )
}

export default Header;