import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  text-align: center;
  font-family: inherit;
  font-size: 42px;
  width: 100px;
  background: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Chewy', cursive;
  padding: 10px 0;
`;

const InputLockUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

function UserInput({ input, setInput }) {
  return (
    <Flex>
      <label>How much flour do you need?</label>
      <InputLockUp>
        <Input type="text" value={input} onChange={setInput}/>
        <span>g</span>
      </InputLockUp>
    </Flex>
  )
}

UserInput.defaultProps = {
  value: 240
};

export default UserInput;