import React from 'react';
import styled from '@emotion/styled';

const Btn = styled.button`
  padding: 12px;
  background: none;
  border: none;
  color: var(--green);
  background: white;
  border-radius: 4px;
  font-family: 'Chewy', cursive;
  font-size: 20px;
  cursor: pointer;
`;

function ConvertBtn(props) {
  return (
    <Btn onClick={props.onClick}>
      Click to convert
    </Btn>
  )
}

export default ConvertBtn;