import React, {useState} from 'react';
import styled from '@emotion/react';

const Note = styled.div`
  background: white;
  width: 100%;
  padding: 8px 12px;
  box-shadow: 5px 5px 12px -10px rgba(0,0,0,0.75);
  text-align: center;
`;

const Input = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  border: none;
`;

function CupConverter() {
  const [cup, setCup] = useState(1);

  const calculateGrams = () => {
    return cup * 140;
  }

  return (
    <Note>
      <h3>Cup Counter</h3>
      <Input type="text" value={cup} onChange={e => setCup(e.target.value)}/>
      cup = <span>{calculateGrams()}</span> g
    </Note>
  )
}

export default CupConverter;