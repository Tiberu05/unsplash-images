import React from 'react'
import styled from "styled-components";



const Button = styled.button`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 10%;
  }
`;


const Toggle = ({theme,  themeToggler }) => {
    return (
        <Button onClick={themeToggler} >
          <i className="toggle off icon" style={{ fontSize: '2rem', outline: 'none'}}></i>
        </Button>
    );
};

export default Toggle;

//   background: ${({ theme }) => theme.background};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};