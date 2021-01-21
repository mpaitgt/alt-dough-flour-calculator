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
  transform: ${props => props.menuVisible ? 'translateX(-140px)' : 'translateX(0px)'};
  @media (max-width: 934px) {
    transform: translateX(0px);
  }
  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

function Container(props) {
  return (
    <CONTAINER menuVisible={props.menuVisible}>
      {props.children}
    </CONTAINER>
  )
}

export default Container;