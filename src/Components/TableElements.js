import React from 'react';
import styled from 'styled-components';


function Table({ children }) {
  const TABLE = styled.table`
    width: auto;
    margin: 0 auto;
  `;
  return <TABLE>{children}</TABLE>;
}

function TH({ children }) {
  const HEADER = styled.th`
    font-size: 26px;
    color: var(--purple);  
    padding: 0px 10px;
  `;
  return <HEADER>{children}</HEADER>
}

function TR({ children }) {
  const ROW = styled.tr`
    margin: 20px 0px;
    // &:nth-child(1n) {
    //   background: #000000;
    // }
    // &:nth-child(2n) {
    //   background: #f1f1f1;
    // }
  `;
  return <ROW>{children}</ROW>;
}

function TD({ children }) {
  const DATA = styled.td`
    padding: 5px 50px;
    font-size: 32px;
  `;
  return <DATA>{children}</DATA>;
}

export { Table, TR, TD, TH };