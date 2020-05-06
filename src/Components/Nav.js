import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const NavItem = styled.li`
  margin: 5px 0px;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    color: var(--purple);
    transition: 0.25s;
    transform: scale(1.1);
  }
`;

function Nav({ recipes, selectBlend }) {
  return (
    <div>
      <h2>Select a Flour:</h2>
      <List>
        {recipes.flours.map(blend => {
          return (
            <NavItem key={blend.key} onClick={selectBlend}>
              {blend.recipe}
            </NavItem>
          )
        })}
      </List>
    </div>
  )
}

export default Nav;