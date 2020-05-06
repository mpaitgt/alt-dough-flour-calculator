import React, {useState} from 'react';
import recipes from '../recipes.json';
import styled from 'styled-components';
import FlourSelection from '../Components/FlourSelection';
import UserInput from '../Components/UserInput';
import FlourDisplay from '../Components/FlourDisplay';
import Container from '../Components/Container';

const Div = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 1fr 1fr;
  align-items: start;
  justify-items: center;
`;

const ItemOne = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
`;

const ItemTwo = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const ItemThree = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
`;

function Flours() {
  const [input, setInput] = useState(240);
  const [blend, setBlend] = useState(recipes.flours[0]);

  const selectBlend = e => {
    const { textContent } = e.target;
    setBlend(
      recipes.flours.find(blend => blend.recipe === textContent)
    );
  }

  return (
    <Container>
      <Div>
        <ItemOne>
          <FlourSelection recipes={recipes} selectBlend={selectBlend} />
        </ItemOne>
        <ItemTwo>
          <UserInput input={input} setInput={e => setInput(e.target.value)} />
        </ItemTwo>
        <ItemThree>
          <FlourDisplay blend={blend} input={input} />
        </ItemThree>
      </Div>
    </Container>
  )
}

export default Flours;