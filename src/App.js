import React, { useState } from 'react';
import Nav from './Components/Nav';
import UserInput from './Components/UserInput';
import Blend from './Components/Blend';
import logo from '../src/Images/altdough15.jpg';
import recipes from './recipes.json';
import styled from 'styled-components';

const MenuBar = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin: 20px auto 50px auto;
`;

function App() {
  const [input, setInput] = useState(240);
  const [blend, setBlend] = useState(recipes.flours[0]);

  const selectBlend = e => {
    const { textContent } = e.target;
    setBlend(
      recipes.flours.find(blend => blend.recipe === textContent)
    );
  }

  return (
    <div>
      <MenuBar>
        <Nav recipes={recipes} selectBlend={selectBlend} />
        <img src={logo} alt="alternative-dough-logo" width="180" />
        <UserInput input={input} setInput={e => setInput(e.target.value)} />
      </MenuBar>
      <Blend blend={blend} input={input} />
    </div>
  );
}

export default App;