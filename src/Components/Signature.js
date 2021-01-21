import React from 'react';
import styled from '@emotion/styled';

const Sig = styled.div`
  color: var(--purple);
  font-size: 16px;
  font-weight: 100;
`;

function Signature() {
  return (
    <Sig >
      &copy;{new Date().getFullYear()} Matt Pignatore
    </Sig>
  )
}

export default Signature;