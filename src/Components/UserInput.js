import React from 'react';
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
  &::after {
    content: 'g';
  }
  &:hover {
    color: var(--purple);
  }
  &:focus {
    color: var(--purple);
  }
`;

function UserInput({ input, setInput }) {
  return (
    <div>
      <h2>How much?</h2>
      <Input type="text" value={input} onChange={setInput}/>
      <span>g</span>
    </div>
  )
}

export default UserInput;