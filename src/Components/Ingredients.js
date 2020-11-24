import React from 'react';
import {Table, TR, TD, TH, Amount} from './TableElements';

function Ingredients({ blend, input }) {

  const calculateAmt = (inp, pct) => {
    let num = inp * (pct / 100);
    if (Number.isInteger(num)) {
      return num;
    } else {
      return parseFloat(num).toFixed(1);
    }
  }

  const calculatePercentage = () => {
    return blend.ingredients.reduce((acc, current, index, array) => {
      let total = acc += current.percentage;
      return total;
    }, 0)
  }

  const calculateTotal = () => {
    let num = blend.ingredients.reduce((acc, current, index, array) => {
      let total = acc += ((input * (current.percentage / 100)));
      return total;
    }, 0)
    if (Number.isInteger(num)) {
      return num;
    } else {
      return parseFloat(num).toFixed(1);
    }
  }

  return (
    <div>
      <Table>
        <tbody>
          {blend.ingredients.map((ingredient, index) => {
            const { percentage, name } = ingredient;
            return (
              <TR key={index}>
                <Amount>{calculateAmt(input, percentage)} g</Amount>
                {/* <TD>{percentage} %</TD> */}
                <TD>{name}</TD>
              </TR>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Ingredients;