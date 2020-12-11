import React, {useState} from 'react';
import styled from '@emotion/styled';

const Note = styled.div`
  width: 100%;
  text-align: right;
`;

const Input = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  border: none;
  background: transparent;
  color: inherit;
`;

function CupConverter({clickToConvert}) {
  const [cup, setCup] = useState(1);

  const calculateGrams = () => {
    return cup * 140;
  }

  return (
    <Note>
      <p>Cup Counter</p>
      <div>
        <Input type="text" value={cup} onChange={e => setCup(e.target.value)}/>
        cup = <span>{calculateGrams()}</span> g
      </div>
      <button onClick={() => clickToConvert(calculateGrams())}>
        Click to convert
      </button>
    </Note>
  )
}

export default CupConverter;