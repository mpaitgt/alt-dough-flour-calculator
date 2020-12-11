import React from 'react';
import styled from '@emotion/styled';

const CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;
  margin-bottom: 4rem;
  position: relative;
  z-index: 99;
  transition: transform 0.25s;
  transform: ${props => props.menuVisible ? 'translateX(-20%)' : 'translateX(0%)'};
`;

function Container(props) {
  return (
    <CONTAINER menuVisible={props.menuVisible}>
      {props.children}
    </CONTAINER>
  )
}

export default Container;