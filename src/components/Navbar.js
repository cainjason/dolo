import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <Container>
      <h3>Navbar</h3>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
  height: 90vh;
  width: 240px;
  background-color: gray;
`;
