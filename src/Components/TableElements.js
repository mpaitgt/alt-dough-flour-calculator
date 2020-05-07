import React from 'react';
import styled from 'styled-components';


function Table({ children }) {
  const TABLE = styled.table`
    width: 100%;
    margin: 0 auto;
    border-collapse:collapse;
    
  `;
  return <TABLE>{children}</TABLE>;
}

function TH({ children }) {
  const HEADER = styled.th`
    font-size: 26px;
    background: var(--green);
    color: var(--offwhite);
    border: 5px solid var(--green); 
    padding: 5px 10px;
  `;
  return <HEADER>{children}</HEADER>
}

function TR({ children }) {
  const ROW = styled.tr`
    
    border: none;
    &:nth-child(2n) {
    }
    &:last-child {
      background: var(--green);
      font-weight: 900;
      color: var(--offwhite);
    }
  `;
  return <ROW>{children}</ROW>;
}

function TD({ children }) {
  const DATA = styled.td`
    padding: 10px 40px 10px 20px;
    font-size: 24px;
  `;
  return <DATA>{children}</DATA>;
}

export { Table, TR, TD, TH };