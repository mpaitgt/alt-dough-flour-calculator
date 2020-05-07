import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../Images/altdough15.jpg';

const style = {
  link: {
    textDecoration: 'none',
    color: 'var(--offwhite)'
  }
}

const Navbar = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 32px;
  background: var(--green);
  box-shadow: 0px 1px 20px 1px rgba(0,0,0,0.2);
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const NavItem = styled.li`
  color: inherit;
  text-decoration: none;
  margin: 5px 0px;
  cursor: pointer;
  transition: 0.25s;
  font-size: 32px;
  padding: 0px 40px;
  &:hover {
    color: var(--purple);
    transition: 0.25s;
    transform: scale(1.1);
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  right: 50px;
  border-radius: 50%;
  width: 160px;
  box-shadow: 0px 10px 10px -10px rgba(0,0,0,0.2);
  z-index: 999;
`;

function Nav({ recipes, selectBlend }) {
  return (
    <Navbar>
      <List>
        <Link to="/" style={style.link}>
          <NavItem>Home</NavItem>
        </Link>
        <Link to="/flour-calculator" style={style.link}>
          <NavItem>Flours</NavItem>
        </Link>
        <Link to="/">
          <Logo src={logo} alt="alternative-dough-logo" />
        </Link>
        <Link to="/recipes" style={style.link}>
          <NavItem>Recipes</NavItem>
        </Link>
      </List>
    </Navbar>
  )
}

export default Nav;