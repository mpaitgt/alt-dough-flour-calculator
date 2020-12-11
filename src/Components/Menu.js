import React from 'react';
import styled from '@emotion/styled';
import flours from '../flours.json';
import CupConverter from '../Components/CupConverter';

const MenuContainer = styled.div`
  position: absolute;
  top: 5%;
  bottom: 10%;
  right: 0;
  background: var(--green);
  width: 260px;
  border-radius: 0 20px 20px 0;
  transition: transform 0.25s;
  z-index: -1;
  transform: ${props => props.menuVisible ? 'translateX(100%)' : 'translateX(0%)'};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 20px;
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
`;

const List = styled.ul`
list-style: none;



`;

function Menu({ stateBlend, flours, selectBlend, menuVisible, clickToConvert }) {
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