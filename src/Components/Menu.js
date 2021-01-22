import React from 'react';
import styled from '@emotion/styled';
import flours from '../flours.json';
import CupConverter from '../Components/CupConverter';

const MenuContainer = styled.div`
  position: absolute;
  top: 0%;
  bottom: 21%;
  right: 0;
  left: 0;
  background: var(--green);
  width: 260px;
  height: 60%;
  border-radius: 20px;
  transition: transform 0.25s;
  transform: ${props => props.menuVisible ? 'translateX(260px)' : 'translateX(0px)'};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 20px;
  @media (max-width: 934px) {
    transform: ${props => props.menuVisible ? 'translateX(0%)' : 'translateX(-200%)'};
    z-index: 99;
    border-radius: 0px;
    box-shadow: 0px 0px 24px 10px rgba(0,0,0,0.1);
    align-items: center;
    height: 100%;
    left: 0;
    right: auto;
    bottom: 0;
  }
`;

const Item = styled.li`
  padding: 5px 0;
  font-family: 'Chewy', cursive;
  text-align: right;
  font-size: 32px;
  color: ${props => props.stateBlend.recipe === props.blend.recipe ? 'var(--purple)' : 'var(--offwhite)'};
  cursor: pointer;
  &:hover {
    color: var(--purple);
  }
  @media (max-width: 934px) {
    text-align: left;
  }
`;

const List = styled.ul`
  list-style: none;
`;

function Menu({ stateBlend, flours, selectBlend, menuVisible, clickToConvert  }) {
  return (
    <MenuContainer menuVisible={menuVisible}>
      <List>
        {flours.flours.map(blend => {
          return (
            <Item blend={blend} stateBlend={stateBlend} key={blend.key} onClick={selectBlend}>
              {blend.recipe}
            </Item>
          )
        })}
      </List>
      <CupConverter clickToConvert={clickToConvert} />
    </MenuContainer>
  )
}

Menu.defaultProps = {
  flours: flours
}

export default Menu;