import React from 'react';
import styled from '@emotion/styled';

const CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--green);
  height: 90vh;
  max-width: 650px;
  margin: 2rem auto;
  border-radius: 20px 20px;
  box-shadow: 0px 0px 24px 10px rgba(0,0,0,0.1);
  z-index: 999;
`;

function Container(props) {
  return (
    <CONTAINER>
      {props.children}
    </CONTAINER>
  )
}

export default Container;