import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  text-align: center;
  font-family: inherit;
  font-size: 52px;
  width: 100px;
  background: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Chewy', cursive;
  padding: 1rem 0;
`;

function UserInput({ input, setInput }) {
  return (
    <Flex>
      <label>How much flour do you need?</label>
      <div>
        <Input type="text" value={input} onChange={setInput}/>
        <span>g</span>
      </div>
    </Flex>
  )
}

UserInput.defaultProps = {
  value: 240
};

export default UserInput;