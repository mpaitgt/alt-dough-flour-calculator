import React from 'react';
import Logo from './Logo';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin-bottom: 2rem;
  min-height: 100px;
  background: var(--green);
  border-radius: 0 0 20px 20px;
  position: relative;
  box-shadow: 0px 0px 24px 10px rgba(0,0,0,0.1);
  z-index: 90;
  @media (max-width: 600px) {
    border-radius: 0;
    min-height: 160px;
    margin-bottom: 0;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Logo width="160px" />
    </Container>
  )
}

export default Footer;