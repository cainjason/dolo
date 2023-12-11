import React from 'react';
import styled from 'styled-components';

function Body() {
  return (
    <Container>
      <h3>Body</h3>
    </Container>
  )
}

export default Body;

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
`;
