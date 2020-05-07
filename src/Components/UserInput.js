import React from 'react';
import CupConverter from '../Components/CupConverter';
import styled from 'styled-components';

const Input = styled.input`
  text-align: center;
  font-family: inherit;
  font-size: 52px;
  width: 160px;
  height: 100px;
  background: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
`;

function UserInput({ input, setInput }) {
  return (
    <div>
      <h2>How much?</h2>
      <Input type="text" value={input} onChange={setInput}/>
      <span>g</span>
      <CupConverter />
    </div>
  )
}

export default UserInput;