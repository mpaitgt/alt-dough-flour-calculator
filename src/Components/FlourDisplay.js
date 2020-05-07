import React from 'react';
import {Table, TR, TD, TH} from '../Components/TableElements';

function FlourDisplay({ blend, input }) {

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
      <h1>{blend.recipe}</h1>
      <Table>
        <tbody>
          <tr>
            <TH>Amount</TH>
            <TH>Weight</TH>
            <TH>Ingredient</TH>
          </tr>
          {blend.ingredients.map(ingredient => {
            const { percentage, name } = ingredient;
            return (
              <TR>
                <TD>{calculateAmt(input, percentage)} g</TD>
                <TD>{percentage} %</TD>
                <TD>{name}</TD>
              </TR>
            )
          })}
          <TR>
            <TD>{calculateTotal()} g</TD>
            <TD>{calculatePercentage()}%</TD>
            <TD></TD>
          </TR>
        </tbody>
      </Table>
    </div>
  )
}

export default FlourDisplay;