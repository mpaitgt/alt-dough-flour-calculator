import React from 'react';
import {Table, TR, TD, Amount} from './TableElements';
import styled from '@emotion/styled';

const Container = styled.div`
  box-shadow: 0px 0px 24px 10px rgba(0,0,0,0.1);
  z-index: 2;
`;

function Ingredients({ blend, input }) {

  const calculateAmt = (inp, pct) => {
    let num = inp * (pct / 100);
    if (Number.isInteger(num)) {
      return num;
    } else {
      // return parseFloat(num).toFixed(1);
      return parseInt(num);
    }
  }

  const generateBlankRows = (blend) => {
    if (blend.ingredients.length < 7) {
      let displayData = [];
      let autofill = 7 - blend.ingredients.length;
      for (let i = 1; i <= autofill; i++) {
        displayData.push(<TR><TD>&nbsp;</TD><TD>&nbsp;</TD></TR>);
      }
      return displayData;
    }
  }

  return (
    <Container>
      <Table>
        <tbody>
          {blend.ingredients.map((ingredient, index) => {
            const { percentage, name } = ingredient;
            return (
              <TR key={index}>
                <Amount>{calculateAmt(input, percentage)} g</Amount>
                <TD>{name}</TD>
              </TR>
            )
          })}
          {generateBlankRows(blend)}
        </tbody>
      </Table>
    </Container>
  )
}

export default Ingredients;