import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const MyStyledComponent = () => {

  const [welcome,setWelcome] = useState("")

  const handleWelcome = function(){
      if(welcome === ""){
        setWelcome("Welcome to my website!")
      }else{
        setWelcome("")
      }
      
  }

  return (
    <div className='styledComponent'>
      <h1>Styled Component Example</h1>
      <StyledButton onClick={handleWelcome}>Click Me</StyledButton>
      <h2>{welcome}</h2>

    </div>
  );
};

export default MyStyledComponent;
