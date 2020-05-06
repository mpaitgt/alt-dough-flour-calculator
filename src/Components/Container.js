import React from 'react';
import styled from 'styled-components';

const CONTAINER = styled.div`
  width: 80%;
  margin: 4rem auto;
  text-align: left;
  position: relative;
`;

function Container(props) {
  return (
    <CONTAINER>
      {props.children}
    </CONTAINER>
  )
}

export default Container;