import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
  padding: 12px;
  background: white;
  box-shadow: 10px 10px 20px -10px rgba(0,0,0,0.75);
  border-radius: 6px;
  transition: transform 0.25s ease-out;
  cursor: pointer;
  max-width: 300px;
  img {
    width: 300px;
    box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
  }
  & > div {
    h4 {
      line-height: 32px;
      margin-top: 12px;
    }
    & > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      font-size: 14px;
      margin-top: 12px;
      & > p {
        display: flex;
        flex-direction: column;
        & > strong {
          margin-top: 5px;
        }
      }
    }
  }
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in;
  }
`;

function EdamamItem({ recipe }) {
  return (
    <Item>
      <img src={recipe.image} alt={recipe.label} />
      <div>
        <h4>{recipe.label}</h4>
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
    </Item>
  )
}

export default EdamamItem;