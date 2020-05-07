import React from 'react';
import Container from '../Components/Container';
import recipes from '../recipes.json';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 20px;
  box-shadow: 1px 0px 32px -20px rgba(0,0,0,0.75);
  img {
    width: 400px;
    margin-right: 50px;
  }
  & > div {
    & > div {
      display: grid; 
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      span {
        margin-right: 10px;
      }
    }
  }
`;

function RecipePage({ match, history }) {
  const { data } = recipes;
  const recipe = data.find(item => item.id === parseInt(match.params.id));

  console.log(history);

  return (
    <Container>
      <Header>
        <img src={recipe.image} alt={recipe.label} />
        <div>
          <h1>{recipe.label}</h1>
          <div>
            <p>
              <span>Yield:</span>
              <strong>{recipe.yield}</strong>
            </p>
            <p>
              <span>Prep time:</span>
              <strong>{recipe.prep_time}</strong>
            </p>
            <p>
              <span>Cook type:</span>
              <strong>{recipe.cook_type.charAt(0).toUpperCase() + recipe.cook_type.slice(1)}</strong>
            </p>
          </div>
        </div>
      </Header>
      <button onClick={() => history.goBack()}>back</button>
    </Container>
  )
}

export default RecipePage;