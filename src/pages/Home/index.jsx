/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
width:100%;
display:flex;
align-items:center;
flex-direction:column;
`;

const Balloon = styled.div`
height:100px;
width:100px; 
bordeer-raduis:50px;
background-color:#e20202;
transform:scale(${({ size }) => size});
`;
function App() {
  const [size, setSize] = useState(1);
  return (
    <HomeContainer className="App">
      <h1 onClick={() => setSize(size + 0.1)}>Home page</h1>
      <Balloon size={size} />
    </HomeContainer>
  );
}

export default App;
