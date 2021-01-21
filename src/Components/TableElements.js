import React from 'react';
import styled from '@emotion/styled';


function Table({ children }) {
  const TABLE = styled.table`
    width: 100%;
    margin: 0 auto;
    border-collapse:collapse;
    height: 100%;
  `;
  return <TABLE>{children}</TABLE>;
}

function TH({ children }) {
  const HEADER = styled.th`
    font-size: 26px;
    background: var(--green);
    color: var(--offwhite);
    border: 5px solid var(--green); 
  `;
  return <HEADER>{children}</HEADER>
}

function TR({ children }) {
  const ROW = styled.tr`
    color: var(--purple);
    border: none;
    border-bottom: 1px solid var(--green);
    &:nth-child(even) {
      background: var(--offwhite);
    }
    &:nth-child(odd) {
      background: var(--offwhite2);
    }
  `;
  return <ROW>{children}</ROW>;
}

function TD({ children }) {
  const DATA = styled.td`
    font-family: 'Chewy', cursive;
    font-size: 32px;
    color: var(--purple);
    text-align: left;
    padding: 16px 0;
    @media (max-width: 934px) {
      font-size: 28px;
    }
  `;
  return <DATA>{children}</DATA>;
}

function Amount({ children }) {
  const DATA = styled.td`
    font-family: 'Chewy', cursive;
    font-size: 32px;
    color: var(--purple);
    text-align: right;
    padding-right: 2rem;
    @media (max-width: 934px) {
      font-size: 28px;
    }
  `;
  return <DATA>{children}</DATA>;
}

export { Table, TR, TD, TH, Amount };