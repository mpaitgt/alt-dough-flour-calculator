import React, {useState, useEffect} from 'react';
import EdamamItem from '../Components/EdamamItem';
import Container from '../Components/Container';
import recipes from '../recipes.json';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function Recipes() {

  return (
    <Container>
      <h1>Recipes</h1>
      <Grid>
        { 
          recipes.data.map(recipe => {
            return (
              <EdamamItem recipe={recipe} />
            )
          })
        }
      </Grid>
    </Container>
    
    
  )
}

export default Recipes;