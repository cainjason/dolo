import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <h2>Header</h2>
      <input type="search" placeholder="G.R.A.N.T. Church A.M.E."></input>
    </Container>
  )
}

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: blueviolet;
`;
