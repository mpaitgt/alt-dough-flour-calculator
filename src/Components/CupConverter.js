import React, {useState} from 'react';
import styled from '@emotion/styled';
import ConvertBtn from './ConvertBtn';

const Note = styled.div`
  width: 100%;
  text-align: right;
  font-family: 'Chewy', cursive;
  color: white;
  font-size: 24px;
`;

const Input = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: inherit;
  border: none;
  background: transparent;
  color: inherit;
  font-family: inherit;
  outline: none;
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
      <ConvertBtn onClick={() => clickToConvert(calculateGrams())} />
    </Note>
  )
}

export default CupConverter;